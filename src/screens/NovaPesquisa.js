import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NovaPesquisa = (props) => {
    const [txtNome, setNome] = useState('');
    const [txtData, setData] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const redirecionarHome = () => {
        if (!txtNome.trim() || !txtData.trim()) {
            setMostrarMensagem(true);
        } else {
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
                <Text style={mostrarMensagem ? estilos.textoVermelho : estilos.textoRoxo}>Preencha no nome da pesquisa</Text>

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
                <Text style={mostrarMensagem ? estilos.textoVermelho : estilos.textoRoxo}>Preencha a data</Text>

                <Text style={estilos.label}>Imagem</Text>
                <TextInput
                    style={estilos.imageInput}
                    placeholder="Câmera/Galeira de imagens"
                />
            </View>
            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.mainButton} onPress={redirecionarHome}>
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
        flex: 0.2,
        width: '70%',
        flexDirection: 'column',
        minHeight: 200,
        maxHeight: 'auto',
        marginBottom: 40,
        marginTop: 10,
        backgroundColor: '#372775',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
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
    imageInput: {
        padding: 7,
        fontSize: 16,
        width: '50%',
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: 60,
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
