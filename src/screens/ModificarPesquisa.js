import { Text, View, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db_firestore } from '../firebase/config';


const ModificarPesquisa = ({ route }) => {

    const navigation = useNavigation();

    //const { texto, color, name, cardData } = route.params;
        //const { texto = '', color = '#000000', name = 'info', cardData = '' } = route.params || {}; //->  isso faz dar certo, está recebendo dados

        const uid = useSelector((state) => state.login.uid);

    const  localNome = useSelector((state) => state.pesquisa.nome);
    const  localData = useSelector((state) => state.pesquisa.data);
    const  localImage = useSelector((state) => state.pesquisa.imagem);
    const  idPesquisa = useSelector((state) => state.pesquisa.id);


    const [txtNome, setNome] = useState(localNome); //se usar useSelector direto ele só guarda 1 caracter
    const [txtData, setData] = useState(localData);
    const [txtImagem, setImagem] = useState(localImage);
    const [mostarMensagemNome, setMostarMensagemNome] = useState(false);
    const [mostrarMensagemData, setMostrarMensagemData] = useState(false);
    const [mostrarMensagemImagem, setMostrarMensagemImagem] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);


    const redirecionarHome = () => {
        navigation.pop(2);
    }

    const convertUriToBase64 = async (uri) => {
            const resizedImage = await ImageResizer.createResizedImage(
                uri,
                100,
                100,
                'JPEG',
                100
            );
    
            const imageUri = await fetch(resizedImage.uri);
            const imageBlob = await imageUri.blob();
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };
            reader.readAsDataURL(imageBlob);
        };
    
        const pickImage = () => {
            launchImageLibrary({ mediaType: 'photo' }, (result) => {
                if(result.didCancel){
                    setImagem();
                } else {
                    convertUriToBase64(result.assets[0].uri);
                }
            });
        }

        const updatePesquisa = (idPesquisa) => {
            const updateRef = doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa)

            deleteDoc(doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa))
            
            updateDoc(updateRef, {
                nome: txtNome,
                data: txtData,
                imagem: txtImagem
    
            })
        }

        const deletePesquisa = (idPesquisa) => {
            deleteDoc(doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa))
            redirecionarHome();
        }

        const verificarDados = () => {//Por algum motivo é necessário apertar duas vezes para cadastrar no sistema. um clique para alternar o estado de 'setMostarMensagemNome' 'setMostrarMensagemData' e 'setMostrarMensagemImagem'. verifique os logs comentados abaixo pra ver.
            const nome = txtNome.trim();
            const data = txtData.trim();
            const imagem = txtImagem ? txtImagem.toString().trim() : ''; //se não convertar essa string para string ele flagra como undefined


            const dataRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    
            if (nome === '') {
                setMostarMensagemNome(true);
            } else {
                setMostarMensagemNome(false);
            }
            if (data === '') {
                setMostrarMensagemData(true);
            } else {
                if (!dataRegex.test(data)) {
                    setMostrarMensagemData(true);
                } else {
                    setMostrarMensagemData(false);
                }
            }
            if (!imagem){
                setMostrarMensagemImagem(true)
            }else{
                setMostrarMensagemImagem(false)
            }
    
             if (!mostarMensagemNome && !mostrarMensagemData && !mostrarMensagemImagem) {
                updatePesquisa(idPesquisa)
                console.log('atualizou no banco de dados')
                navigation.pop(2); // Atualizado de props.navigation, aumentado para 2 pops pra atualizar os dados 
             }
        };


    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <Text style={estilos.label}>Nome</Text>
                <TextInput
                    value={txtNome}
                    onChangeText={setNome}
                    style={estilos.input}
                />
                <Text style={estilos.label}>Data</Text>
                <TouchableOpacity style={estilos.inputComIcone}>
                    <TextInput
                        keyboardType="number-pad"
                        value={txtData}
                        onChangeText={setData}
                        style={estilos.internInput}
                    />
                    <Icon name="calendar-month" size={30} color="#989898" />
                </TouchableOpacity>
                <Text style={estilos.label}>Imagem</Text>
                    <Pressable onPress={pickImage} style={txtImagem ? estilos.imageInputComImagem : estilos.imageInputSemImagem}>
                        {txtImagem ? 
                        <Image source={{ uri: txtImagem }} style={{height: 70, width: 70}}/> :
                        <Text style={estilos.imageInputText}>Escolha uma imagem</Text>
                        }
                    </Pressable>
                    <Text style={mostrarMensagemImagem ? estilos.textoVermelho : estilos.textoRoxo}>Insira uma imagem</Text>            
                </View>
            
            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.mainButton} onPress={verificarDados}>
                    <Text style={estilos.mainButtonText}>SALVAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoEstatico} onPress={() => setIsModalVisible(true)}>
                    <Icon name="delete" size={40} color="#EEEEEE" />
                    <Text style={estilos.labelLixo}>Apagar</Text> 
                </TouchableOpacity>

                <Modal
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={{ flex: 1, backgroundColor: "#2B1F5C", padding: 60 }}>
                        <Text style={estilos.label}>Tem certeza de apagar esta pesquisa?</Text> 

                        <View style={estilos.containerModal}>
                            <TouchableOpacity style={[estilos.botaoModal, estilos.botaoSim]} onPress={() => deletePesquisa(idPesquisa)} >
                                <Text style={estilos.textoModal}>Sim</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[estilos.botaoModal, estilos.botaoNao]} onPress={() => setIsModalVisible(false)} >
                                <Text style={estilos.textoModal}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    form: {
        flex: 0.2,
        width: '70%',
        flexDirection: 'column',
        minHeight: 150,
        maxHeight: 150,
        marginBottom: 30,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        padding: 7,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: '20%',
    },
    internInput: {
        padding: 7,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: '100%',
        flex: 1,
    },
    mainButton: {
        backgroundColor: '#37BD6D',
        padding: 4,
        alignItems: 'center',
        height: 30,
        marginTop: 25,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#37BD6D',
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
    redirectButtons: {
        flex: 0.2,
        flexDirection: 'column',
        width: '70%',
        marginTop: 25,
        minHeight: 50,
        maxHeight: 50,
    },
    blocoImagem: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 60,
        borderRadius: 5,
    },
    imageInputComImagem: {
        fontSize: 16,
        width: '50%',
        backgroundColor: '#372775',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageInputSemImagem: {
        fontSize: 16,
        width: '50%',
        backgroundColor: '#FFFFFF',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageInputText: {
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        backgroundColor: '#FFFFFF'
    },
    inputComIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        height: 32,
    },
    botaoEstatico: {
        position: 'absolute',
        top: 20,
        right: -80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelLixo: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
    botaoSim: {
        backgroundColor: '#F57C7C',
    },
    botaoNao: {
        backgroundColor: '#87CEFA',
    },
    containerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    textoModal: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoModal: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default ModificarPesquisa;
