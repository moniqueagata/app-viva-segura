import { View, Text, Pressable, Image, Dimensions, StyleSheet, useWindowDimensions, TextInput, Animated, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react'; 
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SNAP_BOTTOM = (SCREEN_HEIGHT * 0.65) - 120;
const SNAP_TOP = 0;


export default function Mapa() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [usuario, setUsuario] = useState(null);

  const posicaoY = useRef(new Animated.Value(SNAP_BOTTOM)).current;
  const posicaoPainel = useRef(SNAP_BOTTOM);

  const ScrollViewRef = useRef(null);
  const [scrollAtivo, setScrollAtivo] = useState(false);
    
  // Animação do Painel
  const gesto = Animated.event(
    [{ nativeEvent: { translationY: posicaoY} }],
    { useNativeDriver: true }
  );

  const estadoPainel = (event) => {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY, velocityY } = event.nativeEvent;
      const posicao = posicaoPainel.current + translationY;
      let pontoDestino = SNAP_BOTTOM;

      if (posicao < SCREEN_HEIGHT *0.45 || velocityY < -500) {
        pontoDestino = SNAP_TOP; // Sobe/Abre
      } else if (posicao >= SCREEN_HEIGHT * 0.45 || velocityY > 500) {
        pontoDestino = SNAP_BOTTOM; // Fecha
      }

      posicaoPainel.current = pontoDestino;
      posicaoY.setOffset(pontoDestino);
      posicaoY.setValue(0);

      Animated.spring(posicaoY, {
        toValue: 0,
        tension: 65,
        friction: 11,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    posicaoY.setOffset(SNAP_BOTTOM);
    posicaoY.setValue(0);
  }, []);
  // -----------

  // Buscar dados
  useEffect(() => {
      async function carregarDados() {
          const dados = await AsyncStorage.getItem("user");
          if (dados) {
              setUsuario(JSON.parse(dados));
          }
      }
      carregarDados();
  }, []);
  // --------

  // Permissão do mapa e localização atual
  useEffect(() => {
    let inscrito = true;
    let subscription = null;

    async function iniciarMonitoramento() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      let primeiraPosicao = await Location.getLastKnownPositionAsync({});
      if (primeiraPosicao && inscrito) {
        setLocation(primeiraPosicao.coords);
      }
      
      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000,
          distanceInterval: 5,
        },
        ( novaPosicao) => {
          if (inscrito) {
            setLocation(novaPosicao.coords);
          }
        }
      );
    }
    iniciarMonitoramento();

    return () => {
      inscrito = false;
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);
  // ---------

  // Animação na navegação
  const { width } = useWindowDimensions();
  const [medidas, setMedidas] = useState({});
  const [abaAtiva, setAbaAtiva] = useState(1);
  const larguraAba = 60;
  const posicaoX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      const medidaAtual = medidas[abaAtiva];

      if (medidaAtual) {
          const { x, width } = medidaAtual;

          const destinoX = x + (width / 2) - (larguraAba / 2);

          Animated.spring(posicaoX, {
              toValue: destinoX,
              useNativeDriver: true,
              bounciness: 4,
          }).start();
      }
  }, [abaAtiva, medidas]);

  const abaLayout = (index, event) => {
      const { x, width } = event.nativeEvent.layout;
      setMedidas(prev => ({
          ...prev, [index]: { x, width }
      }));
  };

  const abas = [
      { label: 'Home', rota: "Home", imagem: require('../../../assets/img/home.png'), index: 0 },
      { label: 'Mapa', rota: "Mapa",  imagem: require('../../../assets/img/map.png'), index: 1 },
      { label: 'Guardião', rota: "MeusGuardioes", imagem: require('../../../assets/img/angel.png'), index: 2 },
      { label: 'Você', rota: "Perfil",  imagem: require('../../../assets/img/profile.png'), index: 3 }
  ];
  //----------

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            region={
              location ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              } : {
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            showsUserLocation={false}
          >
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.circle}/>
              </View>
            </Marker>
          )}
        </MapView>
     
        <PanGestureHandler
          onGestureEvent={gesto}
          onHandlerStateChange={estadoPainel}
          enabled={!scrollAtivo}
        >
          <Animated.View style={[styles.painel, { transform: [{ translateY: posicaoY }]}]}>
            <View style={{ width: '100%', alignItems: 'center' }} onTouchStart={() => setScrollAtivo(false)}>
              <View style={styles.puxador} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}
              ref={ScrollViewRef}
              onScroll={(event) => {
                const y = event.nativeEvent.contentInset.y;
                if (y <= 0) {
                  setScrollAtivo(false);
                } else {
                  setScrollAtivo(true);
                }
              }}
              scrollEventThrottle={16}
            >
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Image source={require('../../../assets/img/lupa.png')}
                    style={{ width: 22, height: 22 }}
                    tintColor='#ddd'
                  />
                  <TextInput 
                    style={styles.input}
                    placeholder='Procurar no mapa'
                    placeholderTextColor='#ccc'
                  />
                </View>
                <View style={styles.photoUpload}>
                  <View style={styles.upload}>
                      {usuario?.foto ? (
                        <Image
                            source={{ uri: usuario.foto }}
                            style={{ width: '100%', height: '100%' }} 
                        />
                      ) : (
                        <Image 
                            source={require('../../../assets/img/icon.png')} 
                            style={{ width: '100%', height: '100%' }} 
                            resizeMode='contain' 
                        />
                      )}
                  </View>          
                </View>
              </View>
              <View style={styles.contentPainel} onTouchStart={() => setScrollAtivo(true)}>
                <Text style={styles.subtitulo}>Deseja compartilhar sua localização atual?</Text>
                <Pressable style={styles.button}>
                  <Text style={styles.txWhite}>Compartilhar</Text>
                </Pressable>
                <View style={styles.card}>
                  <Text>Endereço</Text>
                </View>
                <View style={styles.card}>
                  <Text>Endereço</Text>
                </View>   
                <View style={styles.card}>
                  <Text>Endereço</Text>
                </View>   
                <View style={styles.card}>
                  <Text>Endereço</Text>
                </View>   
                <View style={styles.card}>
                  <Text>Endereço</Text>
                </View>       
              </View>
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
        </View>
        <View style={styles.navegacao}>
          <Animated.View 
              style={[styles.line, 
                  { width: larguraAba, transform: [{ translateX: posicaoX }]}
              ]}
          />
          {abas.map((aba) => (
              <Pressable 
                  key={aba.index}
                  style={styles.buttonNav}
                  onPress={() => {
                      setAbaAtiva(aba.index);
                  
                      if (aba.rota) {
                      navigation.navigate(aba.rota);
                      }
                  }}               
                  onLayout={(event) => abaLayout(aba.index, event)}
              >
                  <Image source={aba.imagem}
                      style={{ width: 22, height: 22 }}
                      tintColor={abaAtiva === aba.index ? '#ff80aa' : '#fff'}
                      resizeMode='contain'
                  />
                  <Text style={[styles.textNav, abaAtiva === aba.index && { color: '#ff80aa'}]}>{aba.label}</Text>
              </Pressable>
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}