import { View, Text } from 'react-native';
import { StyleSheet } from "react-native"
import { useEffect, useRef, useState } from 'react';
// importação das bibliotecas para realização do mapa
import MapView, { Marker } from 'react-native-maps';
import { 
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, LocationObject, watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import { Cabecalho } from '../componentes/Cabecalho';


export const Localizador = ()  => {

  const [location, setLocation] = useState<LocationObject | null>(null);
 
  const mapRef = useRef<MapView>(null);

  async function requestLocationPermissions(){

    // Desestruturando o que vai usar
    const {granted} = await requestForegroundPermissionsAsync();
    
    // Log do status da permissão
    console.log("Permissão concedida:", granted);

    if(granted){
      // console.log("Obtendo posição atual...");
      const currentPosition = await getCurrentPositionAsync();
      console.log("Posição atual obtida:", currentPosition);
      setLocation(currentPosition);
      console.log("Localização atual definida:", currentPosition);
    }
  }

  useEffect(() => {
    // console.log("Executando useEffect...");
    requestLocationPermissions();
  }, []);

  useEffect(() =>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval:1
    }, (response) =>{
      setLocation(response);
      // ? pois pode ser que seja nulo
      mapRef.current?.animateCamera({
        pitch: 70,
        center: response.coords
      })
    })
  },[]);

  return (
    <View style={styles.container}>
      {
        location && 
        <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      >
        <Marker
            coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }}
        />
      </MapView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        flex:1,
        width: '100%'
    }
})