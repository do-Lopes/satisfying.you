import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';


const AgradecimentoParticipacao = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.pop(3);
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={estilos.container}>

            <View style={estilos.rectangle}>
                <Icon name="close" size={36} color="#5139AD" />
            </View>

            <Text style={estilos.headerText}>
                Obrigado por participar da pesquisa!
                {'\n'}Aguardamos você no próximo ano!
            </Text>
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
        right: 60,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AgradecimentoParticipacao;
