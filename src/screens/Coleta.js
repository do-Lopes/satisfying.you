import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ColetaCard from '../components/ColetaCard';

const Coleta = (props) => {
    return (
        <View style={estilos.view}>
            <Text style={estilos.Texto}>
                O que você acho do carnaval 2024?
            </Text>
            <View>
                <TouchableOpacity style={estilos.botaoVoltar} onPress={() => props.navigation.goBack()}>
                    <Icon name="close" size={24} color="#5139AD" />
                </TouchableOpacity>
                <View style={estilos.Botoes}>

                    <ColetaCard name="mood-bad" color="red" texto="Pessimo" navigation={props.navigation} />

                    <ColetaCard name="sentiment-dissatisfied" color="orange" texto="Ruim" navigation={props.navigation} />

                    <ColetaCard name="sentiment-neutral" color="yellow" texto="Neutro" navigation={props.navigation} />

                    <ColetaCard name="sentiment-satisfied" color="lime" texto="Bom" navigation={props.navigation} />

                    <ColetaCard name="sentiment-very-satisfied" color="green" texto="Excelente" navigation={props.navigation} />

                </View>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
    },
    Texto: {
        flex: 0.6,
        fontSize: 40,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    Botoes: {
        verticalAlign: 'middle',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 2,
    },
    botaoVoltar: {
        position: 'absolute',
        top: -100,
        right: 15,  // Ajuste a posição do botão à esquerda do ícone de fechar
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Coleta;
