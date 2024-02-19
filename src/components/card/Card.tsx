import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/welcome.png')}
                style={{ width: 200, height: 200, position: 'relative', left: 90 }}
            />
            <Text style={styles.signupText}>Welcome</Text>
            <Text style={styles.signupMinText}>Faça seu login ou registre!</Text>
            <View style={styles.card}>
                <Button title="Login" color={'#fff'}/>
            </View>
            <View style={styles.card}>
                <Button title="Registro" color={'#fff'}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        gap: 50
    },
    signupText: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1F41BB'
    },
    signupMinText: {
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        color: '#1F41BB'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 40,
        borderBottomColor: '#8e93a1',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#1F41BB',
        borderRadius: 4,
        shadowColor: 'rgba(100, 100, 100, 0.2)',
        shadowRadius: 8,
        shadowOpacity: 0.8,
        shadowOffset: { width: 2, height: 2 },
        margin: 16,
        padding: 16,
        borderWidth: 1, // Adiciona uma borda fina
        borderColor: '#ddd', // Define a cor da borda
    }
});

export default SignUp;