import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import RecuperarSenha from './src/screens/RecuperarSenha';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Coleta from './src/screens/Coleta';
import Relatorio from './src/screens/Relatorio';
import Drawer from './src/screens/Drawer';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        title: 'Nova Conta',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#5139AD',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                    options={{
                        title: 'Recuperação de Senha',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerTintColor: '#5139AD',
                    }}
                />
                <Stack.Screen
                    name="AgradecimentoParticipacao"
                    component={AgradecimentoParticipacao}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NovaPesquisa"
                    component={NovaPesquisa}
                    options={{
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#5139AD',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen
                    name="AcoesPesquisa"
                    component={AcoesPesquisa}
                    options={({route}) => ({
                        title: route.params.texto,
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#5139AD',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    })}
                />
                <Stack.Screen
                    name="ModificarPesquisa"
                    component={ModificarPesquisa}
                    options={{
                        title: 'Modificar Pesquisa',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#5139AD',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen
                    name="Coleta"
                    component={Coleta}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Relatorio"
                    component={Relatorio}
                    options={{
                        title: 'Relatorio',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#5139AD',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen
                    name="Drawer"
                    component={Drawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const estilos = StyleSheet.create({
    headerDefault: {
        backgroundColor: '#2B1D62',
        height: 50,
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
    },
    headerLeft: {
        paddingLeft: 0,
    },
    navigationBackImage: {
        width: 60,
        height: 60,
    }
})

export default App
