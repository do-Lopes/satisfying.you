import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import HomeCard from '../components/HomeCard';
import { TextInput } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db_firestore } from '../firebase/config';

const Home = (props) => {

    const [listaPesquisas, setListaPesquisas] = useState();

    const uid = useSelector((state) => state.login.uid);
    const pesquisaCollection = collection(db_firestore, `usuarios/${uid}/pesquisas`);

    useEffect(() => {
        const q = query(pesquisaCollection)
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const pesquisas = [];
            snapshot.forEach((doc) => {
                pesquisas.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setListaPesquisas(pesquisas);
        });
    }, [])//ignorar esse erro, no video o professor utiliza esse macete

    const itemPesquisa = ({item}) => {
        return(
            <HomeCard nome={item.nome} data={item.data} imagem={item.imagem} pessimo={item.pessimo} ruim={item.ruim} neutro={item.neutro} bom={item.bom} excelente={item.excelente} id={item.id}/>
        )
    }

    const redirecionarNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa');
    };
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.searchArea}>
                <Icon name='search' size={30} color='grey' />
                <TextInput style={estilos.textInput} placeholder="Insira o termo de busca" />
            </TouchableOpacity>

            <FlatList horizontal style={estilos.scrollContent} data={listaPesquisas} renderItem={itemPesquisa} keyExtractor={pesquisa => pesquisa.id}/>

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
    scrollContent: {
        backgroundColor: '#372775',
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 15,
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
