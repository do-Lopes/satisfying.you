import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import HomeCard from '../components/HomeCard';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {

    const redirecionarNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa');
    };
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.searchArea}>
                <Icon name='search' size={30} color='grey' />
                <TextInput style={estilos.textInput} placeholder="Insira o termo de busca" />
            </TouchableOpacity>

            <ScrollView horizontal style={estilos.scrollContent}>
                {/* <View style={estilos.mainContent}> */}
                    <HomeCard name="devices" color="brown" texto="SECOMP 2023" data="10/10/2023" />

                    <HomeCard name="groups" color="grey" texto="UBUNTU 2022" data="05/06/2022" />

                    <HomeCard name="woman" color="red" texto="MENINAS CPU" data="01/04/2022" />

                    <HomeCard name="woman" color="red" texto="MENINAS CPU" data="01/04/2022" />

                    <HomeCard name="woman" color="red" texto="MENINAS CPU" data="01/04/2022" />
                {/* </View> */}
            </ScrollView>
            <View>
                <TouchableOpacity style={estilos.mainButton} onPress={redirecionarNovaPesquisa}>
                    <Text style={estilos.mainButtonText}>Nova Pesquisa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 0,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        backgroundColor: 'white',
        height: '100%',
        color: 'grey',
        fontFamily: 'AveriaLibre-Regular',
    },
    mainContent: {
        // verticalAlign: 'middle',
        // flexDirection: 'row',
        // alignContent: 'center',
        // justifyContent: 'space-between',
        // paddingTop: 15,
    },
    scrollContent: {
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 15,
        paddingBottom: 20,
    },
    mainButton: {
        backgroundColor: '#37BD6D',
        padding: 4,
        alignItems: 'center',
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#37BD6D',
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default Home;
