
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync, watchPositionAsync,
  LocationAccuracy, LocationObject, LocationSubscription
} from 'expo-location';
import { Broadcast } from 'phosphor-react-native';
 
interface FixedPoint {
  id: number;
  latitude: number;
  longitude: number;
  temp?: number; // Assuming temp is an optional field, you can modify accordingly
}
 
export const Localizador: React.FC = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
 
  const [distance1, setDistance1] = useState<number | null>(null);
  const [distance2, setDistance2] = useState<number | null>(null);
  const [temp, setTemp] = useState<number | null>(null);
 
  const mapRef = useRef<MapView>(null);
 
  const initialRegion: Region = {
    latitude: -22.9140639,
    longitude: -47.068686,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
 
  const haversine = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371000;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };
 
  const fixedPoints: FixedPoint[] = [
    { id: 1, latitude: -22.9140639, longitude: -47.068065, temp: 25 },
    { id: 2, latitude: -22.9141804, longitude: -47.0683294, temp: 30 }
  ];
 
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (!granted) {
      setErrorMsg('Permission to access location was denied');
      return;
    }
 
    const currentPosition = await getCurrentPositionAsync();
    setLocation(currentPosition);
 
    const locationSubscription: LocationSubscription = await watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (newLocation) => {
      setLocation(newLocation);
      mapRef.current?.animateCamera({
        pitch: 70,
        center: newLocation.coords
      });
 
      const la = newLocation.coords.latitude;
      const lo = newLocation.coords.longitude;
 
      const distanceToFixedPoint1 = haversine(la, lo, fixedPoints[0].latitude, fixedPoints[0].longitude);
      const distanceToFixedPoint2 = haversine(la, lo, fixedPoints[1].latitude, fixedPoints[1].longitude);
      setDistance1(distanceToFixedPoint1);
      setDistance2(distanceToFixedPoint2);
 
      if (distanceToFixedPoint1 <= distanceToFixedPoint2) {
        setTemp(fixedPoints[0].temp ?? null);
      } else {
        setTemp(fixedPoints[1].temp ?? null);
      }
    });
 
    return () => {
      locationSubscription.remove();
    };
  }
 
  useEffect(() => {
    requestLocationPermissions();
  }, []);
 
  return (
    <View style={styles.container}>
      {location &&
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
 
          <Marker coordinate={{ latitude: -22.914670, longitude: -47.068350 }}>
            <View style={styles.marcadorContainer}>
              <Broadcast size={15} color="#ffffff" />
            </View>
          </Marker>
 
          <Marker coordinate={{ latitude: -22.914874, longitude: -47.068190 }}>
            <View style={styles.marcadorContainer}>
              <Broadcast size={15} color="#ffffff" />
            </View>
          </Marker>
        </MapView>
      }
 
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}><Text style={styles.infoText}>Latitude: </Text><Text style={styles.infoText}>{location?.coords.latitude}</Text></View>
        <View style={styles.infoBox}><Text style={styles.infoText}>Longitude: </Text><Text style={styles.infoText}>{location?.coords.longitude}</Text></View>
        <View style={styles.infoBox}><Text style={styles.infoText}>Distância até o ponto fixo 1: </Text>{distance1 !== null && <Text style={styles.infoText}>{distance1.toFixed(1)} metros</Text>}</View>
        <View style={styles.infoBox}><Text style={styles.infoText}>Distância até o ponto fixo 2: </Text>{distance2 !== null && <Text style={styles.infoText}>{distance2.toFixed(2)} metros</Text>}</View>
      </View>
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
  map: {
    flex: 1,
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
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#fff',
    width: '100%'
  },
  infoBox: {
    flexDirection: 'row',
    marginVertical: 5
  },
  infoText: {
    fontSize: 16
  }
});
 