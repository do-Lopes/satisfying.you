import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AgradecimentoParticipacao = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="transparent" />
            </TouchableOpacity>
            
            <View style={estilos.rectangle}>
                <Icon name="close" size={36} color="#FFFFFF" />
            </View>
            
            <Text style={estilos.headerText}>Obrigado por participar da pesquisa!
            <br />Aguardamos você no próximo ano!</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        width: '90%',
        textAlign: 'center',
        fontSize: 48,
        lineHeight: 57,
        fontFamily: 'Averia Libre',
        color: '#FFFFFF',
        marginTop: 30,
    },
    rectangle: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 43,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#372775',
    },
    botaoVoltar: {
        position: 'absolute',
        top: 10,
        right: 60,  // Ajuste a posição do botão à esquerda do ícone de fechar
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AgradecimentoParticipacao
