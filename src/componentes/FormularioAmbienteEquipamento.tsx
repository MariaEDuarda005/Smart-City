import React, { useState } from 'react'
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { UserPlus } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./AuthContext";
import axios from 'axios'
import {Picker} from '@react-native-picker/picker';

export const FormularioAmbienteEquipamento:React.FC = () => { 

    const [tipo, setTipo] = useState('')
    const [mac_address, setMac_address] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [unidade_medida, setUnidade_medida] = useState('')
    const [status_operacional, setStatus_operacional] = useState('')
    const [observacao, setObservacao] = useState('')

    const navigation = useNavigation()
    const { setToken } = useAuth()

    const fazerCadastroSensor = async () => {
        try{
            const response = await axios.post('http://10.0.2.2:8000/api/sensores/',
                {
                    tipo: tipo,
                    mac_address: mac_address,
                    latitude: latitude,
                    longitude: longitude,
                    localizacao: localizacao,
                    responsavel: responsavel,
                    unidade_medida: unidade_medida,
                    status_operacional: status_operacional,
                    observacao: observacao
                }
            )
            const token = response.data.access;
            console.log('Cadastro bem sucedido ', token)
            setToken(token)
        }catch (error) {
            // Se houver um erro no cadastro, você pode exibir uma mensagem de erro
            console.error('Erro de cadastro:', error);
        }
    };

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <Picker
                    style={estilos.campo}
                    selectedValue={tipo}
                    onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                >
                    <Picker.Item label="Selecione o tipo de sensor"/>
                    <Picker.Item label="Temperatura" value="Temperatura" />
                    <Picker.Item label="Contador" value="Contador" />
                    <Picker.Item label="Luminosidade" value="Luminosidade" />
                    <Picker.Item label="Umidade" value="Umidade" />
                </Picker>
                <TextInput 
                    style={estilos.campo}
                    placeholder='Mac Address'
                    placeholderTextColor='#01233c'
                    keyboardType='default'
                    onChangeText={setMac_address}
                    value={mac_address}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Latitude'
                    placeholderTextColor='#01233c'    
                    keyboardType='default'           
                    onChangeText={setLatitude}
                    value={latitude}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Longitude'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setLongitude}
                    value={longitude}
                />      
                <TextInput 
                    style={estilos.campo}
                    placeholder='Localização'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setLocalizacao}
                    value={localizacao}
                />           
                <TextInput 
                    style={estilos.campo}
                    placeholder='Responsavel'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setResponsavel}
                    value={responsavel}
                />  
                <TextInput 
                    style={estilos.campo}
                    placeholder='Unidade de medida'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setUnidade_medida}
                    value={unidade_medida}
                /> 
            <TextInput 
                    style={estilos.campo}
                    placeholder='observação'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setObservacao}
                    value={observacao}
                />  
                <View style={estilos.switch_box}>
                    <Text style={estilos.statusTexto}>Status Operacional - {status_operacional ? "Ligado" : "Desligado"}</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={status_operacional ? "#f5dd4b" : "#525153"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setStatus_operacional}
                    value={status_operacional}
                    />
                </View>
                                              
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={fazerCadastroSensor}
            >
                <Text>
                    <UserPlus 
                        size={28} 
                        color="#fff"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    switch_box:{
        alignItems: 'flex-start',
    },
    campo: {
        height: 50,
        backgroundColor: '#dee2e6',
        color: '#01233c',
        marginVertical: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 545,
        marginStart: 10,
        backgroundColor: '#4f030a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    statusTexto: {
        color: '#fff',  // Cor do texto em branco
    },
  });