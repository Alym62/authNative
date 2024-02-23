import { useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Initial = () => {
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/welcome.png')}
                style={{ width: 200, height: 200, position: 'relative', left: 90 }}
            />
            <Text style={styles.signupText}>Olá, Seja bem vindo</Text>
            <Text style={styles.signupMinText}>Faça seu login ou registre!</Text>
            <View style={styles.card}>
                <Button title="Login" color={'#fff'}/>
            </View>
            <View style={styles.card}>
                <Button title="Registro" color={'#fff'} onPress={handleNavigate}/>
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
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    }
});

export default Initial;