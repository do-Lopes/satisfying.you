import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'; 
import Login from './src/components/screens/Login'
import Cadastro from './src/components/screens/Cadastro'
import RecuperarSenha from './src/components/screens/RecuperarSenha'
import AgradecimentoParticipacao from './src/components/screens/AgradecimentoParticipacao'

const Stack = createStackNavigator()

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
                        headerTintColor: '#372775',
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
                        headerTintColor: '#372775',
                    }}
                />
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao}
                    options={{
                        title: 'Obrigado!',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerTintColor: '#372775',
                    }}
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
