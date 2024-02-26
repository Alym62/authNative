import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Role } from "../../dto/enums/dto.enum";
import { UsuarioDTO } from "../../dto/usuario.dto";
import { CheckBox } from "react-native-elements";

// TODO: Estruturar as funções.
const Register = () => {
    const usuario = new UsuarioDTO();
    const rolesList: Role[] = [Role.ADMIN, Role.USER];

    const [inputOne, setInputOne] = useState(usuario.username);
    const [inputTwo, setInputTwo] = useState(usuario.password);
    const [selectedRole, setSelectedRole] = useState("");

    // TODO: Sempre checar o TCP em que ele está abrindo.
    const API_URL = "http://192.168.15.111:8080/api/v1/auth/";


    const handlerRegister = async () => {
        try {
            await axios.post(`${API_URL}registro`, {
                username: inputOne,
                password: inputTwo,
                role: selectedRole
            });
        } catch (error) {
            console.error('Erro: ', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Registro</Text>
            <Text style={styles.signupMinText}>Registre sua conta aqui para saber mais informações.</Text>
            <TextInput
                style={styles.input}
                placeholder="Novo username"
                onChangeText={text => setInputOne(text)}
                value={inputOne}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova senha"
                onChangeText={text => setInputTwo(text)}
                value={inputTwo}
            />
            <View style={styles.roleContainer}>
                {rolesList.map((role, index) => (
                    <CheckBox
                        key={index}
                        title={role}
                        checked={selectedRole === role}
                        onPress={() => setSelectedRole(role)}
                    />
                ))}
            </View>
            <View style={styles.card}>
                <Button title="Registrar" color={'#fff'} onPress={handlerRegister} />
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
    roleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
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