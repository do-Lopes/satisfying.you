import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'


const RecuperacaoSenha = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setMensagemErro('E-mail parece ser inválido')
        } else {
            setMensagemErro('')
        }
    }

    return (
        <View style={estilos.container}>

            <View style={estilos.form}>
                <Text style={estilos.label}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input}
                />
                {mensagemErro ? <Text style={estilos.mensagemErro}>{mensagemErro}</Text> : null}

                <TouchableOpacity style={estilos.botaoRecuperar} onPress={validarEmail}>
                    <Text style={estilos.textoBotao}>RECUPERAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
})

export default RecuperacaoSenha
