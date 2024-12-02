import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator();

const Drawer = ({ route }) => {
    const { userEmail } = route.params;
    return (
        <DrawerNavigator.Navigator
            screenOptions={{
                headerShown: true, headerTitle: '', headerTintColor: '#FFFFFF', drawerStyle: { backgroundColor: '#372775' }, drawerActiveTintColor: '#FFFFFF', drawerActiveBackgroundColor: '#372775',
                headerStyle: { backgroundColor: '#271C4F', height: 40 }, drawerLabelStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 20 }
            }}
            drawerContent={(props) => <CustomDrawer {...props} name={userEmail} />}>
            <DrawerNavigator.Screen name="Pesquisas" component={Home} options={{ drawerIcon: () => (<Icon name='description' size={25} color='#FFFFFF' />) }} />
        </DrawerNavigator.Navigator>
    );
};

export default Drawer;
