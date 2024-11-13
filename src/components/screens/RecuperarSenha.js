<<<<<<< HEAD
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const RecuperacaoSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setMensagemErro('Por favor, insira um e-mail.');
        } else if (!emailRegex.test(email)) {
            setMensagemErro('E-mail parece ser inválido');
        } else {
            setMensagemErro('');
        }
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <Text style={estilos.label}>E-mail</Text>
=======
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'


// Componente funcional para a tela de recuperação de senha
const RecuperacaoSenha = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    // Função para validar o formato do e-mail inserido
    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setMensagemErro('E-mail parece ser inválido')
        } else {
            setMensagemErro('')
        }
    }

    return (
        // View principal com estilo 'container'
        <View style={estilos.container}>
            {/* Formulário para inserir o e-mail */}
            <View style={estilos.form}>
                {/* Rótulo para o campo de e-mail */}
                <Text style={estilos.label}>E-mail</Text>
                {/* Campo de entrada para o e-mail */}
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input}
                />
<<<<<<< HEAD
                {mensagemErro ? <Text style={estilos.mensagemErro}>{mensagemErro}</Text> : null}

=======
                {/* Exibe a mensagem de erro se houver alguma */}
                {mensagemErro ? <Text style={estilos.mensagemErro}>{mensagemErro}</Text> : null}

                {/* Botão para acionar a função de validação do e-mail */}
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                <TouchableOpacity style={estilos.botaoRecuperar} onPress={validarEmail}>
                    <Text style={estilos.textoBotao}>RECUPERAR</Text>
                </TouchableOpacity>
            </View>
        </View>
<<<<<<< HEAD
    );
};

=======
    )
}

// Estilos utilizados no componente
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
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
<<<<<<< HEAD
        marginTop: 30,
=======
        marginTop: 30, 
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
<<<<<<< HEAD
});

export default RecuperacaoSenha;
=======
})

export default RecuperacaoSenha
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
