import ColetaCard from '../components/ColetaCard';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc,updateDoc, doc, increment } from 'firebase/firestore';
import { db_firestore } from '../firebase/config';
import { useSelector } from 'react-redux';

const Coleta = (props) => {

    const uid = useSelector((state) => state.login.uid);
    const  idPesquisa = useSelector((state) => state.pesquisa.id);

    const updateP = (idPesquisa) => {
        const satRef = doc(db_firestore,`usuarios/${uid}/pesquisas`, idPesquisa)
            
            updateDoc(satRef,{
            pessimo:increment(1)
        })
    }

    const updateR = (idPesquisa) => {
        const satRef = doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa)
            
            updateDoc(satRef,{
            ruim:increment(1)
        })
    }

    const updateN = (idPesquisa) => {

        const satRef = doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa)
        
            updateDoc(satRef,{
            neutro:increment(1)
        })
    }

    const updateB = (idPesquisa) => {
        const satRef = doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa)
            
            updateDoc(satRef,{
            bom:increment(1)
        })
    }

    const updateE = (idPesquisa) => {
        const satRef = doc(db_firestore, `usuarios/${uid}/pesquisas`, idPesquisa)
            
            updateDoc(satRef,{
            excelente:increment(1)
        })
    }

    const redirecionarAgradecimentoParticipacao = () => {
        props.navigation.navigate('AgradecimentoParticipacao');
    };

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

                <TouchableOpacity onPress={() => {updateP(idPesquisa);redirecionarAgradecimentoParticipacao();}}>
                    <Icon name="mood-bad" size={100} color="red" />
                    <Text style={estilos.cardText}>Pessimo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {updateR(idPesquisa);redirecionarAgradecimentoParticipacao();}}>
                    <Icon name="sentiment-dissatisfied" size={100} color="orange" />
                    <Text style={estilos.cardText}>Ruim</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {updateN(idPesquisa);redirecionarAgradecimentoParticipacao();}}>
                    <Icon name="sentiment-neutral" size={100} color="yellow" />
                    <Text style={estilos.cardText}>Neutro</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {updateB(idPesquisa);redirecionarAgradecimentoParticipacao();}}>
                    <Icon name="sentiment-satisfied" size={100} color="lime" />
                    <Text style={estilos.cardText}>Bom</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {updateE(idPesquisa);redirecionarAgradecimentoParticipacao();}}>
                    <Icon name="sentiment-very-satisfied" size={100} color="green" />
                    <Text style={estilos.cardText}>Excelente</Text>
                </TouchableOpacity>
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

export default Coleta;
