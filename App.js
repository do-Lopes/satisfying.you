import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'; 
import Login from './src/components/screens/Login'
import Cadastro from './src/components/screens/Cadastro'
import RecuperarSenha from './src/components/screens/RecuperarSenha'
import AgradecimentoParticipacao from './src/components/screens/AgradecimentoParticipacao'

const Stack = createStackNavigator()

<<<<<<< HEAD
=======
// Componente principal do aplicativo
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
<<<<<<< HEAD
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }}
                />
=======
                {/* Definindo a primeira tela (Login) */}
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                 {/* Tela de Cadastro */}
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                        title: 'Nova Conta',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
<<<<<<< HEAD
                        headerTintColor: '#372775',
=======
                        headerTintColor: '#4B369E',
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
<<<<<<< HEAD
                <Stack.Screen 
                    name="RecuperarSenha" 
                    component={RecuperarSenha}
=======
                 {/* Tela de Recuperar Senha */}
                <Stack.Screen 
                    name="RecuperarSenha" 
                    component={RecuperarSenha} 
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                    options={{
                        title: 'Recuperação de Senha',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
<<<<<<< HEAD
                        headerTintColor: '#372775',
                    }}
                />
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao}
=======
                        headerTintColor: '#4B369E',
                    }}
                />
                {/* Tela de Agradecimento pela participação */}
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao} 
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
                    options={{
                        title: 'Obrigado!',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
<<<<<<< HEAD
                        headerTintColor: '#372775',
=======
                        headerTintColor: '#4B369E',
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
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
<<<<<<< HEAD
    navigationBackImage: {
        width: 60,
        height: 60,
    }
})

=======
})
>>>>>>> e5fe0247f94d235da60e3e7a6e7dffe41fdd4bcd
export default App
