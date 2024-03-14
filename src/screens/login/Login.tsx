import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { UsuarioDTO } from "../../dto/usuario.dto";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const usuario = new UsuarioDTO();
    const navigation = useNavigation<any>();

    const [inputOneLogin, setInputOneLogin] = useState(usuario.username);
    const [inputTwoLogin, setInputTwoLogin] = useState(usuario.password);

    // TODO: Sempre checar o TCP em que ele está abrindo.
    const API_URL = "http://192.168.15.111:8080/api/v1/auth/";

    const handlerLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}login`, {
                username: inputOneLogin,
                password: inputTwoLogin,
            });

            const token = response.data;

            await AsyncStorage.setItem('token', token);

            console.log('Esse é o token do login: ', token);

            navigation.navigate('User');
        } catch (error) {
            console.error('Erro: ', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Login</Text>
            <Text style={styles.signupMinText}>Faça seu login aqui com a sua conta para mais informações.</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu username"
                onChangeText={text => setInputOneLogin(text)}
                value={inputOneLogin}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={text => setInputTwoLogin(text)}
                value={inputTwoLogin}
            />
            <View style={styles.card}>
                <Button title="Login" color={'#fff'} onPress={handlerLogin} />
            </View>
            <View>
                <Text style={styles.loginMinTextPassword}>Esqueceu a senha?</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: '#1F41BB',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'transparent',
        position: 'relative',
        bottom: 60,
    },
    signupText: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1F41BB',
        position: 'relative',
        bottom: 100,
    },
    signupMinText: {
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        color: '#1F41BB',
        position: 'relative',
        bottom: 80,
    },
    loginMinTextPassword: {
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        color: '#1F41BB',
        position: 'relative',
        bottom: 60,
        textDecorationLine: 'underline'
    },
    card: {
        width: 250,
        backgroundColor: '#1F41BB',
        borderRadius: 4,
        shadowColor: 'rgba(100, 100, 100, 0.2)',
        shadowRadius: 8,
        shadowOpacity: 0.8,
        shadowOffset: { width: 2, height: 2 },
        margin: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        position: 'relative',
        bottom: 40,
    }
});

export default Login;