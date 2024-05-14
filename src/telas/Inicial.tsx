import {StyleSheet, View, ImageBackground} from 'react-native'
import {Cabecalho} from '../componentes/Cabecalho'
import {Botao} from '../componentes/Botao'


export const Inicial = () => {
  return (
    <View style={estilos.conteiner}>

      <Cabecalho 
        titulo="Localizador"
        subtitulo="Inicial"
      />

      <ImageBackground
        style={estilos.imagem}
        source={require('../../assets/localizar.png')}>

          <Botao texto='teste 1'/>
          <Botao texto='teste 2'/>
          <Botao texto='teste 3'/>
          <Botao texto='teste 4'/>
          
      </ImageBackground>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#080a0c'
  },
  imagem:{
    flex: 1,
    flexWrap: 'wrap',
    resizeMode: 'cover'
  },
});

