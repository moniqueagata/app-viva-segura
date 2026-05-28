import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  Animated as RNAnimated // Usamos como RNAnimated para não confundir com o Reanimated
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';



import React, { useState, useEffect, useRef } from 'react'; // <--- O SEGREDO ESTÁ AQUI (adicionei o useRef)
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

import BottomNav from '../../components/BottomNav';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 280; // O quanto ele sobe

export default function Mapa() {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const enviarLocalizacao = async (coords) => {
    try {

      const response = await axios.post(
        'http://10.67.4.174:8000/api/localizacao',
        {
          id_usuaria: 1,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }
      );

      console.log('Localização enviada:', response.data);

    } catch (error) {
      console.log(
        'Erro ao enviar localização:',
        error.response?.data || error.message
      );
    }
  };

  

  //const gesture = Gesture.Pan()
  //.onStart(() => {
  // context.value = { y: translateY.value };
  //})
  // .onUpdate((event) => {
  //translateY.value = event.translationY + context.value.y;
  // Limita para não subir demais
  // translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
  //})
  //.onEnd(() => {
  // Se soltar no meio, ele decide se sobe tudo ou desce
  // if (translateY.value > -SCREEN_HEIGHT / 3) {
  //  translateY.value = withSpring(0, { damping: 65 });
  //} else {
  //  translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 65 });
  // }
  //});

  //const rBottomSheetStyle = useAnimatedStyle(() => {
  //return {
  //transform: [{ translateY: translateY.value }],
  //};
  //});

  useEffect(() => {
    (async () => {
      // 1. Solicita permissão
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      // 2. Obtém a posição atual
      let currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation.coords);

      enviarLocalizacao(currentLocation.coords);
    })();
  }, []);



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>

        {/* MAPA AO FUNDO */}
        <MapView
          style={StyleSheet.absoluteFillObject}
          region={
            location
              ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
              : {
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }
          }
          showsUserLocation={false}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            >
              <Image
                source={require('../../../assets/icones/local1.png')}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Marker>
          )}
        </MapView>

        {/* PAINEL DESLIZÁVEL (O BOTTOM SHEET) */}
        <View>
          <View style={styles.barraPesquisa}>
            {/* O PUXADOR (A LINHA) */}
            <View style={styles.viewPuxador}>
              <View style={styles.puxador} />
            </View>

            {/* CONTEÚDO DO PAINEL */}
            <View style={styles.viewPesquisa}>
              <TextInput
                placeholder='Pesquise no mapa'
                style={styles.pesquisa}
              />
            </View>

            {/* Adicione mais coisas aqui para aparecerem quando subir */}
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Sugestões
              </Text>
              {/* Lista de locais, etc */}
            </View>

          </View>
        </View>

        <BottomNav abaAtivaInicial={1} />

      </View>
    </GestureHandlerRootView>
  );
}