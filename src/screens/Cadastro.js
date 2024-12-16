import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { auth_mod } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db_firestore } from '../firebase/config';

const Cadastro = (props) => {
    const [txtEmail, setEmail] = useState('');
    const [txtSenha1, setSenha1] = useState('');
    const [txtSenha2, setSenha2] = useState('');
    const [mostrarMensagemSenha, setMostrarMensagemSenha] = useState(false);
    const [mostrarMensagemEmail, setMostrarMensagemEmail] = useState(false);
    const [mensagemErroSenha, setMensagemErroSenha] = useState('');
    const [mensagemErroEmail, setMensagemErroEmail] = useState('');

    const addUsuario = (email, id) => {
        const docUser = {
            email: email,
        };
        setDoc(doc(db_firestore, "usuarios", id), docUser)
    }

    const verificarLogin = () => {
        let email = txtEmail.trim();
        let senha1 = txtSenha1.trim();
        let senha2 = txtSenha2.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        let emailValido = true;
        let senhaValida = true;
    
        // Validação de email
        if (!emailRegex.test(email)) {
            emailValido = false;
            setMensagemErroEmail('Digite um email válido');
        }
    
        // Validação de senha
        if (senha1 === '' || senha2 === '') {
            senhaValida = false;
            setMensagemErroSenha('Digite uma senha');
        } else if (senha1 !== senha2) {
            senhaValida = false;
            setMensagemErroSenha('O campo repetir senha difere da senha');
        } else if (senha1.length < 6) {
            senhaValida = false;
            setMensagemErroSenha('A senha é muito fraca');
        }
    
        // Atualiza os estados de erro
        setMostrarMensagemEmail(!emailValido);
        setMostrarMensagemSenha(!senhaValida);
    
        // Se tudo for válido, prossegue com o cadastro
        if (emailValido && senhaValida) {
            createUserWithEmailAndPassword(auth_mod, email, senha1)
                .then((userLogged) => {
                    addUsuario(email, userLogged.user.uid);
                    props.navigation.navigate('Login');
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        setMostrarMensagemEmail(true);
                        setMensagemErroEmail('O email já está em uso');
                    } else {
                        console.log(error);
                    }
                });
        }
    };
    

    return (
        <View style={estilos.container}>
            <View style={estilos.form}>
                <Text style={estilos.label}>Email</Text>
                <TextInput value={txtEmail} onChangeText={setEmail}
                    keyboardType="email-address"
                    style={estilos.input} />

                <Text style={mostrarMensagemEmail ? estilos.textoVermelho : estilos.textoRoxo}>
                    {mensagemErroEmail}
                </Text>

                <Text style={estilos.label}>Senha</Text>
                <TextInput value={txtSenha1} onChangeText={setSenha1}
                    secureTextEntry
                    style={estilos.input} />

                <Text style={estilos.label}>Repetir senha</Text>
                <TextInput value={txtSenha2} onChangeText={setSenha2}
                    secureTextEntry
                    style={estilos.input} />

                <Text style={mostrarMensagemSenha ? estilos.textoVermelho : estilos.textoRoxo}>
                    {mensagemErroSenha}
                </Text>
            </View>
            <View style={estilos.redirectButtons}>
                <TouchableOpacity style={estilos.mainButton} onPress={verificarLogin}>
                    <Text style={estilos.mainButtonText}>CADASTRAR</Text>
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
    form: {
        width: '70%',
        flexDirection: 'column',
        minHeight: 150,
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
        boxSizing: 'border-box',
        height: 30,
    },
    redirectButtons: {
        flex: 0.2,
        flexDirection: 'column',
        width: '70%',
        minHeight: 50,
        maxHeight: 50,
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
    textoRoxo: {
        color: '#372775',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoVermelho: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default Cadastro;
