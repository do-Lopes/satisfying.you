import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/components/screens/Login'
import Cadastro from './src/components/screens/Cadastro'

const Stack = createStackNavigator()


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro}
                options={{
                    title: 'Nova Conta',
                    headerStyle: estilos.headerDefault,
                    headerTitleStyle: estilos.headerTitle,
                    headerLeftContainerStyle: estilos.headerLeft,
                    headerTintColor: '#372775',
                    headerBackTitle: null,
                    headerBackImageSyle: estilos.navigationBackImage,
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
});


export default App