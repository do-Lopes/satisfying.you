import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AcoesPesquisa = () => {

    const navigation = useNavigation();
    const nome = useSelector((state) => state.pesquisa.nome);//os dados vem do HomeCard.js

    useEffect(() => {
        navigation.setOptions({
            title: nome,
        });
    }, [nome]);

    const redirecionarModificarPesquisa = () => {
        navigation.navigate('ModificarPesquisa');
    };

    const redirecionarColeta = () => {
        navigation.navigate('Coleta');
    };

    const redirecionarRelatorio = () => {
        navigation.navigate('Relatorio');
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <View style={estilos.alinhadorIcones}>
                    <TouchableOpacity style={estilos.backgroundIconeAcoesPesquisa} onPress={redirecionarModificarPesquisa}>
                        <Icon name="edit-document" size={60} color="#ffffff"></Icon>
                        <Text style={estilos.label}>Modificar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.backgroundIconeAcoesPesquisa} onPress={redirecionarColeta}>
                        <Icon name="library-add-check" size={60} color="#ffffff"></Icon>
                        <Text style={estilos.label}>Coletar Dados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.backgroundIconeAcoesPesquisa} onPress={redirecionarRelatorio}>
                        <Icon name="donut-large" size={60} color="#ffffff"></Icon>
                        <Text style={estilos.label}>Relatório</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    header: {
        width: '70%',
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: 80,
        maxHeight: 80,
    },
    title: {
        alignItems: 'center',
        fontSize: 40,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    form: {
        flex: 0.2,
        width: '70%',
        flexDirection: 'column',
        minHeight: 150,
        maxHeight: 150,
        marginBottom: 30,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        padding: 7,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: '20%',
    },
    mainButton: {
        backgroundColor: '#37BD6D',
        padding: 4,
        alignItems: 'center',
        marginTop: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#37BD6D',
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
    redirectButtons: {
        flex: 0.2,
        flexDirection: 'column',
        width: '70%',
        marginTop: 25,
        minHeight: 50,
        maxHeight: 50,
    },
    createAccountButton: {
        backgroundColor: '#419ED7',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#419ED7',
        marginBottom: 7,
    },
    createAccountText: {
        color: '#FFFFFF',
        paddingBottom: 1,
        fontFamily: 'AveriaLibre-Regular',
    },
    forgotPasswordButton: {
        backgroundColor: '#B0CCDE',
        alignItems: 'center',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
    },
    forgotPasswordText: {
        paddingBottom: 2,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoRoxo: {
        color: '#372775',
        fontFamily: 'AveriaLibre-Regular',
        paddingBottom: 8,
    },
    textoVermelho: {
        color: 'red',
        fontFamily: 'AveriaLibre-Regular',
        paddingBottom: 8,
    },
    alinhadorIcones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%',
    },
    backgroundIconeAcoesPesquisa: {
        backgroundColor: '#312464',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 160,
        borderRadius: 5,
    },
})

export default AcoesPesquisa;
