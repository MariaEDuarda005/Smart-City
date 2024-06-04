import { useState,useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../componentes/AuthContext';// ajuste o caminho conforme necessário
import axios from 'axios';
import { RotasTab } from '../rotas/RotasTab';

export const Login = () => { 
  
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const { token, setToken } = useAuth();
    const navigation = useNavigation()

    function abrirInicial(){
        navigation.navigate('rotasTab')
    }

    function abrirCadastro(){
        navigation.navigate('cadastro')
    }

    const fazerLogin = async () => {
        
        try {
            const response = await axios.post(
                'http://10.0.2.2:8000/api/token',
                {
                    username: usuario,
                    password: senha
                },
                
            );
            const token = response.data.access;
            console.log('Login bem-sucedido:', token);
            setToken(token); // Atualiza o token no contexto
            abrirInicial();
            //navigation.navigate('rotasTab')
        } catch (error) {
            console.error('Erro de login:', error);
        }
    };

    // async function fazerLogin(data){
    //     try{
    //         // chamar a api
    //         const response = await axios.post('http://127.0.0.1:8000/api/token/', {
    //             username: data.usuario,
    //             password: data.senha
    //         });
    //         const {access, refresh} = response.data;
    //         localStorage.setItem('access_token', access);
    //         localStorage.setItem('refresh_token', refresh);

    //         console.log("Login foi bem sucedido");
    //         navigation.navigate('rotasTab')
    //     }catch(error){
    //         console.log("Erro na autenticação ", error)
    //     }
    // }

    return(
        <View style={estilos.conteiner}>

            <Image
                style={estilos.imagem}
                source={require('../../assets/logo.png')}
            />
           
           <TextInput
                style={estilos.campo}
                placeholder='Usuário' 
                placeholderTextColor='#e1e5f2'
                onChangeText={setUsuario}
                value={usuario}
            />
            <TextInput 
                style={estilos.campo}
                placeholder='Senha'
                placeholderTextColor='#e1e5f2'
                keyboardType='default'
                onChangeText={setSenha}
                value={senha}      
            />    

            <TouchableOpacity 
                style={estilos.botao} 
                onPress={abrirInicial}
            >
                <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>                  

            <TouchableOpacity style={estilos.cadastro} >
                <Text 
                    style={estilos.textoCadastro}
                    onPress={abrirCadastro}>
                        Cadastre-se
                </Text>
            </TouchableOpacity>  
            
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#4f030a',
        color: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        height: 50,
        width: 300,   
        backgroundColor: '#4f030a',       
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
        marginVertical: 20,  
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
    cadastro: {
        width: 300,
        alignItems: 'flex-end'
    },
    textoCadastro: {
        color: '#fff',
        fontSize: 16,
    },
    imagem: {
        width: 200,
        height: 170
    }
})