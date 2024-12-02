import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const Cadastro = (props) => {
    const [txtEmail, setEmail] = useState('');
    const [txtSenha1, setSenha1] = useState('');
    const [txtSenha2, setSenha2] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const verificarLogin = () => {
        let email = txtEmail.trim();
        let senha1 = txtSenha1.trim();
        let senha2 = txtSenha2.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email) || senha1 !== senha2) {
            setMostrarMensagem(true);
        }
        else {
            props.navigation.navigate('Login');
        }
    };

    return (
        <View style={estilos.container}>

            <View style={estilos.form}>
                <Text style={estilos.label}>Email</Text>
                <TextInput value={txtEmail} onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input} />

                <Text style={estilos.label}>Senha</Text>
                <TextInput value={txtSenha1} onChangeText={setSenha1}
                    secureTextEntry
                    style={estilos.input} />

                <Text style={estilos.label}>Repetir senha</Text>
                <TextInput value={txtSenha2} onChangeText={setSenha2}
                    secureTextEntry
                    style={estilos.input} />

                <Text style={mostrarMensagem ? estilos.textoVermelho : estilos.textoRoxo}>
                    O campo repetir senha difere da senha
                </Text>

                <TouchableOpacity style={estilos.mainButton} onPress={verificarLogin}>
                    <Text style={estilos.mainButtonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
    textoRoxo: {
        color: '#372775',
        fontFamily: 'AveriaLibre-Regular',
        paddingBottom: 8,
    },
    textoVermelho: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
        paddingBottom: 8,
    },
});

export default Cadastro;
