import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Register = () => {
    const [inputOne, setText1] = useState('');
    const [inputTwo, setText2] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Registro Aqui!</Text>
            <Text style={styles.signupMinText}>Registre sua conta aqui para saber mais informações.</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu username"
                onChangeText={text => setText1(text)}
                value={inputOne}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={text => setText2(text)}
                value={inputTwo}
            />
            <View style={styles.card}>
                <Button title="Registrar" color={'#fff'} />
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
        borderWidth: 2,
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
        bottom: 100,
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

export default Register;