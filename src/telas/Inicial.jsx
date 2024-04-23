import {StyleSheet, View} from 'react-native'
import {Cabecalho} from '../componentes/Cabecalho'
import {Botao} from '../componentes/Botao'


export const Inicial = () => {
  return (
    <View style={estilos.conteiner}>

      <Cabecalho 
        titulo="Localizador"
        subtitulo="2DS-B"
      />

      <Botao texto="Usuários" />
      <Botao texto="Sensores" />
      <Botao texto="Sobre" />

    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#080a0c'
  },
});

