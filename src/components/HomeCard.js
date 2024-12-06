import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { reducerPesquisa } from '../redux/pesquisaSlice';
import { useDispatch } from 'react-redux';

const HomeCard = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const cardNome = props.nome;
    const cardData = props.data;
    const cardImagem = props.imagem;
    const pessimo = props.pessimo;
    const ruim = props.ruim;
    const neutro = props.neutro;
    const bom = props.bom;
    const excelente = props.excelente;

    const redirecionarAcoesPesquisa = () => {
        dispatch(reducerPesquisa({nome: cardNome, data: cardData, imagem: cardImagem, pessimo: pessimo, ruim: ruim, neutro: neutro, bom: bom, excelente: excelente}));
        navigation.navigate('AcoesPesquisa');
    };
    return (
        <TouchableOpacity onPress={redirecionarAcoesPesquisa} style={estilos.container}>
            <Image source={{ uri: cardImagem }} style={estilos.cardImagem} />
            <Text style={estilos.cardNome}>{cardNome}</Text>
            <Text style={estilos.cardData}>{cardData}</Text>
        </TouchableOpacity>
    );
};


const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        maxHeight: 220,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 'auto',
        borderWidth: 1,
        borderRadius: 10,
    },
    cardImagem: {
        height: 85,
        width: 85,
    },
    cardNome: {
        fontSize: 40,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
    },
    cardData: {
        fontSize: 12,
        backgroundColor: 'white',
        color: 'grey',
        alignContent: 'center',
        textAlign: 'center',
    },
});

export default HomeCard;
