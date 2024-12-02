import { Text, View, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const ModificarPesquisa = ({ route }) => {

    const navigation = useNavigation();

    const { texto, color, name, cardData } = route.params;


    const [txtNome, setNome] = useState(texto);
    const [txtData, setData] = useState(cardData);

    const cadastrarPesquisa = () => {
        let nome = txtNome.trim()
        let data = txtData.trim()
    }

    const redirecionarHome = () => {
        navigation.pop(2);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <Text style={estilos.label}>cardTexto</Text>
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
                <View style={estilos.blocoImagem}>
                    <Icon name={name} size={60} color={color}></Icon>
                </View>
            </View>
            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.mainButton} onPress={redirecionarHome}>
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
                            <TouchableOpacity style={[estilos.botaoModal, estilos.botaoSim]} onPress={redirecionarHome} >
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
