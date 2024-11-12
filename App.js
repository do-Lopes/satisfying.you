import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'; 
import Login from './src/components/screens/Login'
import Cadastro from './src/components/screens/Cadastro'
import RecuperarSenha from './src/components/screens/RecuperarSenha'
import AgradecimentoParticipacao from './src/components/screens/AgradecimentoParticipacao'

const Stack = createStackNavigator()

// Componente principal do aplicativo
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Definindo a primeira tela (Login) */}
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                 {/* Tela de Cadastro */}
                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                        title: 'Nova Conta',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#4B369E',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                 {/* Tela de Recuperar Senha */}
                <Stack.Screen 
                    name="RecuperarSenha" 
                    component={RecuperarSenha} 
                    options={{
                        title: 'Recuperação de Senha',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerTintColor: '#4B369E',
                    }}
                />
                {/* Tela de Agradecimento pela participação */}
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao} 
                    options={{
                        title: 'Obrigado!',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerTintColor: '#4B369E',
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
})
export default App
