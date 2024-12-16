import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { reducerLogin } from '../redux/loginSlice';
import { useDispatch } from 'react-redux';

const Login = (props) => {
    const [txtEmail, setEmail] = useState('');
    const [txtSenha, setSenha] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');
    const dispatch = useDispatch();

    const verificarLogin = () => {
        let email = txtEmail.trim();
        let senha = txtSenha.trim();

        signInWithEmailAndPassword(auth_mod, email, senha)
            .then((userLogged) => {
                dispatch(reducerLogin({email: email, uid: userLogged.user.uid}))
                props.navigation.navigate('Drawer');
            })
            .catch((error) => {
                console.log(error)
                setMostrarMensagem(true);
                if (error.code === 'auth/invalid-email') {
                    setMensagemErro('E-mail e/ou senha inválido.');
                }
                else if (error.code === 'auth/missing-password') {
                    setMensagemErro('E-mail e/ou senha inválido.');
                }
                else if (error.code === 'auth/invalid-credential') {
                    setMensagemErro('E-mail e/ou senha inválido.');
                }
                else if (error.code === 'auth/too-many-requests') {
                    setMensagemErro('Tente novamente mais tarde');
                }
            });
    };

    const redirecionarCadastro = () => {
        props.navigation.navigate('Cadastro');
    };

    const redirecionarRecuperar = () => {
        props.navigation.navigate('RecuperarSenha');
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.title}>Satisfying.you</Text>
                <Icon style={estilos.iconTitle} name="sentiment-satisfied" size={48} color={'#FFFFFF'} />
            </View>

            <View style={estilos.form}>
                <Text style={estilos.label}>Email</Text>
                <TextInput value={txtEmail} onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input} />

                <Text style={estilos.label}>Senha</Text>
                <TextInput value={txtSenha} onChangeText={setSenha}
                    secureTextEntry
                    style={estilos.input} />

                <Text style={mostrarMensagem ? estilos.textoVermelho : estilos.textoRoxo}>
                    {mensagemErro}
                </Text>

                <TouchableOpacity style={estilos.mainButton} onPress={verificarLogin}>
                    <Text style={estilos.mainButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.createAccountButton}
                    onPress={redirecionarCadastro}>
                    <Text style={estilos.createAccountText}>Criar minha conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.forgotPasswordButton}
                    onPress={redirecionarRecuperar}>
                    <Text style={estilos.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>
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
        width: '60%',
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: 80,
        maxHeight: 80,
    },
    title: {
        alignItems: 'center',
        fontSize: 35,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    form: {
        flex: 0.2,
        width: '70%',
        flexDirection: 'column',
        minHeight: 150,
        marginBottom: 30,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        paddingVertical: 5,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        height: 30,
    },
    mainButton: {
        backgroundColor: '#37BD6D',
        padding: 4,
        alignItems: 'center',
        marginTop: 10,
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
    },
    textoVermelho: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default Login;
