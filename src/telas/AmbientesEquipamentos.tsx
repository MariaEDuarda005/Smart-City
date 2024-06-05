import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'
import { FormularioAmbienteEquipamento } from '../componentes/FormularioAmbienteEquipamento'
import { ListaAmbienteEquipamento } from "../componentes/ListaAmbienteEquipamento"
import uuid from 'react-native-uuid'

interface AmbientesEquipamentosProps {
    codigo: string;
    descricao: string; 
    statusOperacional: string; 
    instrucoesSeguranca: string; 
    contatoResponsavel: string;
    latitude: string;
    longitude: string;
}

export function AmbientesEquipamentos(){ 

    return(
        <View style={estilos.conteiner}>

            <Cabecalho 
                titulo="Cadastro de ambientes ou equipamentos"
            />

            <FormularioAmbienteEquipamento/>  

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#080a0c'
    },
  });