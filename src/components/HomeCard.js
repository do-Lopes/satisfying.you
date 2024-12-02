import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeCard = (props) => {

    const navigation = useNavigation();

    const cardName = props.name;
    const cardColor = props.color;
    const cardTexto = props.texto;
    const cardData = props.data;

    const redirecionarAcoesPesquisa = () => {
        navigation.navigate('AcoesPesquisa', {texto: cardTexto, color: cardColor, name: cardName, cardData: cardData});
    };

    return (
        <View style={estilos.view}>
            <TouchableOpacity onPress={redirecionarAcoesPesquisa}>
                <Text style={estilos.mainContent}>
                    <Icon name={cardName} size={100} color={cardColor} /> {"\n"}{cardTexto}{"\n"}
                    <Text style={estilos.textStyle}>{cardData}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const estilos = StyleSheet.create({
    view: {
        paddingRight: 15,
    },
    textStyle: {
        fontSize: 18,
        backgroundColor: 'white',
        color: 'grey',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 3,
    },
    mainContent: {
        backgroundColor: 'white',
        alignContent: 'center',
        textAlign: 'center',
        color: '#3F92C5',
        fontSize: 30,
        width: 220,
        height: 180,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default HomeCard;
