import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

const RecuperacaoSenha = ({ navigation }) => {
    const [txtEmail, setEmail] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    const validarEmail = () => {
        let email = txtEmail.trim();

        sendPasswordResetEmail(auth_mod, email)
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                setMostrarMensagem(true);
                if (error.code === 'auth/invalid-email') {
                    setMensagemErro('Digite um email válido');
                }
                else if (error.code === 'auth/user-not-found') {
                    setMensagemErro('O email não foi encontrado');//por algum motivo isso não está funcionando, conversar com o professor
                }
                else if (error.code === 'auth/too-many-requests') {
                    setMensagemErro('Tente novamente mais tarde');
                }
            });
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <Text style={estilos.label}>E-mail</Text>
                <TextInput
                    value={txtEmail}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input}
                />
                <Text style={mostrarMensagem ? estilos.textoVermelho : estilos.textoRoxo}>{mensagemErro}</Text>

                <TouchableOpacity style={estilos.botaoRecuperar} onPress={validarEmail}>
                    <Text style={estilos.textoBotao}>RECUPERAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    form: {
        marginTop: 30,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        borderRadius: 4,
        marginBottom: 10,
    },
    mensagemErro: {
        color: '#FF6B6B',
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
    botaoRecuperar: {
        backgroundColor: '#37BD6D',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 30,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
    textoRoxo: {
        color: '#372775',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoVermelho: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default RecuperacaoSenha;
