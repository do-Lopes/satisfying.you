import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet } from 'react-native';

const CustomDrawer = (props) => {
    const name = props.name;
    return (
        <View style={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.email}>{name}</Text>
                <Text style={estilos.separator}>___________________________________</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={estilos.content}>
                <DrawerItem labelStyle={{ color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', fontSize: 25 }} icon={() => (<Icon name="logout" size={25} color="#FFFFFF" />)} label="Sair" onPress={() => props.navigation.popToTop()} />
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    email: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    },
    separator: {
        color: '#FFFFFF',
    },
    content: {
        justifyContent: 'space-between',
    },
});

export default CustomDrawer;
