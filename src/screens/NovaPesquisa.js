import { Text, View, TextInput, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { collection, addDoc } from 'firebase/firestore';
import { db_firestore } from '../firebase/config';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';


const NovaPesquisa = (props) => {
    const [txtNome, setNome] = useState('');
    const [txtData, setData] = useState('');
    const [imagem, setImagem] = useState();
    const [mostarMensagemNome, setMostarMensagemNome] = useState(false);
    const [mostrarMensagemData, setMostrarMensagemData] = useState(false);
    const [mostrarMensagemImagem, setMostrarMensagemImagem] = useState(false);

    const uid = useSelector((state) => state.login.uid);

    const pesquisaCollection = collection(db_firestore, `usuarios/${uid}/pesquisas`);

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
            if (result.didCancel) {
                setImagem();
            } else {
                convertUriToBase64(result.assets[0].uri);
            }
        });
    }

    const addPesquisa = (nome, data) => {
        const docPesquisa = {
            nome: nome,
            data: data,
            imagem: imagem,
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0,
        };
        addDoc(pesquisaCollection, docPesquisa);
    }

    const verificarDados = () => {
        const nome = txtNome.trim();
        const data = txtData.trim();
        const dataRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        const nomeValido = nome !== '';
        const dataValida = data !== '' && dataRegex.test(data);
        const imagemValida = imagem !== undefined;

        // Atualiza as mensagens de erro
        setMostarMensagemNome(!nomeValido);
        setMostrarMensagemData(!dataValida);
        setMostrarMensagemImagem(!imagemValida);

        // Só adiciona a pesquisa se todos os campos forem válidos
        if (nomeValido && dataValida && imagemValida) {
            addPesquisa(nome, data);
            console.log('adicionou no banco de dados');
            props.navigation.pop();
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
                <Text style={mostarMensagemNome ? estilos.textoVermelho : estilos.textoRoxo}>Digite um nome</Text>

                <Text style={estilos.label}>Data</Text>
                <TouchableOpacity style={estilos.inputComIcone}>
                    <TextInput
                        value={txtData}
                        onChangeText={setData}
                        style={estilos.internInput}
                    />
                    <Icon name="calendar-month" size={30} color="#989898" />
                </TouchableOpacity>
                <Text style={mostrarMensagemData ? estilos.textoVermelho : estilos.textoRoxo}>Digite uma data válida no padrão: DD/MM/YYYY</Text>


                <Text style={estilos.label}>Imagem</Text>
                <Pressable onPress={pickImage} style={imagem ? estilos.imageInputComImagem : estilos.imageInputSemImagem}>
                    {imagem ?
                        <Image source={{ uri: imagem }} style={{ height: 70, width: 70 }} /> :
                        <Text style={estilos.imageInputText}>Escolha uma imagem</Text>
                    }
                </Pressable>
                <Text style={mostrarMensagemImagem ? estilos.textoVermelho : estilos.textoRoxo}>Insira uma imagem</Text>

            </View>
            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.mainButton} onPress={verificarDados}>
                    <Text style={estilos.mainButtonText}>CADASTRAR</Text>
                </TouchableOpacity>
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
        width: '70%',
        flexDirection: 'column',
        minHeight: 200,
        maxHeight: 'auto',
        marginTop: 10,
        backgroundColor: '#372775',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        paddingVertical: 5,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: 30,
    },
    internInput: {
        paddingVertical: 5,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: 30,
        flex: 1,
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
    mainButton: {
        backgroundColor: '#37BD6D',
        padding: 4,
        alignItems: 'center',
        marginTop: 5,
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
        minHeight: 50,
        maxHeight: 50,
    },
    textoRoxo: {
        color: '#372775',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoVermelho: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
    inputComIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        alignContent: 'space-between',
    },
});

export default NovaPesquisa;
