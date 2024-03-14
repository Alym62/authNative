import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';

const HomeUser = () => {
    const [dadosProtegidos, setDadosProtegidos] = useState('');

    const API_URL = "http://192.168.15.111:8080/api/v1/test";

    const handlerBuscandoToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            const response = await axios.get(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const dados = response.data;
            setDadosProtegidos(dados);
        } catch (error) {
            throw error;
        }
    }

    return (
        <View>
            <Button title="Registro" color={'#fff'} onPress={handlerBuscandoToken} />
            <Text>{dadosProtegidos ? dadosProtegidos : 'Não veio nenhum dado!'}</Text>
        </View>
    )
}

export default HomeUser;
