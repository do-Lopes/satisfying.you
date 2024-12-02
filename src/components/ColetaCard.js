import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ColetaCard = (props) => {
    const cardName = props.name;
    const cardColor = props.color;
    const cardTexto = props.texto;

    const redirecionarAgradecimentoParticipacao = () => {
        props.navigation.navigate('AgradecimentoParticipacao');
    };

    return (
        <TouchableOpacity onPress={redirecionarAgradecimentoParticipacao}>
            <Icon name={cardName} size={100} color={cardColor} />
            <Text style={estilos.cardText}>{cardTexto}</Text>
        </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    cardText: {
        fontSize: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        textAlignVertical: 'top',
        textAlign: 'center',
        margin: 2,
    },
});

export default ColetaCard;
