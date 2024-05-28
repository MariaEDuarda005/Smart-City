import { View, Text } from 'react-native';
import { StyleSheet } from "react-native"
import { useEffect, useRef, useState } from 'react';
// importação das bibliotecas para realização do mapa
import MapView, { Marker } from 'react-native-maps';
// Marker para adicoinar os marcadores
import { 
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, LocationObject, watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import { Broadcast  } from 'phosphor-react-native'


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


  // manipulando marcadores
  // let [regiao, setRegiao] = useState({
  //   latitude: -23.4422149, longitude: -46.9235461, 
  //   latitudeDelta: 0.014, longitudeDelta: 0.014});

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

        <Marker coordinate={{latitude: -22.914670, 
          longitude: -47.068350}}>
            <View style={styles.marcadorContainer}>
              <Broadcast  
                  size={15} 
                  color="#ffffff"
              />
            </View>
        </Marker>

        <Marker coordinate={{latitude: -22.914874, 
          longitude: -47.068190}}>
            <View style={styles.marcadorContainer}>
              <Broadcast  
                  size={15} 
                  color="#ffffff"
              />
            </View>
        </Marker>
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
    },
    marcadorContainer: {
      width: 20,
      height: 20,
      backgroundColor: '#317586',
      flexDirection: 'column',
      borderRadius: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})