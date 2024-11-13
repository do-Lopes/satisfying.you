<<<<<<< HEAD
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';

//teste
const AgradecimentoParticipacao = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Menu'); // Substituir para o menu quando implementado
        }, 5000);
        // Limpa o timer se o componente for desmontado antes dos 5 segundos
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={estilos.container}>
            {/* Botão invisível para voltar */}
            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="transparent" /> {/* Ícone invisível */}
            </TouchableOpacity>
            
            {/* Ícone de fechar no canto superior direito */}
            <View style={estilos.rectangle}>
                <Icon name="close" size={36} color="#FFFFFF" />
            </View>
            
            <Text style={estilos.headerText}>
                Obrigado por participar da pesquisa!
                {'\n'}Aguardamos você no próximo ano!
            </Text>
        </View>
    );
};

=======
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Componente funcional AgradecimentoParticipacao
const AgradecimentoParticipacao = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            {/* Botão de voltar que navega para a tela anterior */}
            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
                 {/* Ícone de seta para voltar */}
                <Icon name="arrow-back" size={24} color="transparent" />
            </TouchableOpacity>
            
            {/* Caixa retangular com ícone de fechamento */}
            <View style={estilos.rectangle}>
                <Icon name="close" size={36} color="transparent" />
            </View>
            
            {/* Texto de agradecimento com estilo 'headerText' */}
            <Text style={estilos.headerText}>Obrigado por participar da pesquisa!
            <br />Aguardamos você no próximo ano!</Text>
        </View>
    )
}


// Estilos utilizados no componente
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
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
        right: 60,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
<<<<<<< HEAD
});

export default AgradecimentoParticipacao;
=======
})

export default AgradecimentoParticipacao
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
