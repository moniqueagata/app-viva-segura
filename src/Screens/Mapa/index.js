import { View, Text, Pressable, Image, Dimensions, StyleSheet, useWindowDimensions, TextInput, Animated, ScrollView, Alert, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef, useCallback } from 'react'; 
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import { api } from '../../services/api';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SNAP_BOTTOM = (SCREEN_HEIGHT * 0.65) - 120;
const SNAP_TOP = 0;

const ICONE_TIPO = {
  delegacia: '🚔',
  estacao: '🚇',
  saude: '🏥',
  apoio: '🤝',
  default: '📌',
};

const ZONA_LESTE_BOUNDS = {
  minLng: -46.6100, // Limite Oeste 
  maxLat: -23.4800, // Limite Norte
  maxLng: -46.3600, // Limite Leste
  minLat: -23.6400  // Limite Sul
};

export default function Mapa() {
  const navigation = useNavigation();
  const mapRef = useRef(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [modal, setModal] = useState(false);
  const [endereco, setEndereco] = useState('Obtendo endereço...');
  const [pesquisa, setPesquisa] = useState('');
  const [sugestoes, setSugestoes] = useState([]);
  const [buscando, setBuscando] = useState(false);
  const [pontosRota, setPontosRota] = useState([]);
  const [alertas, setAlertas] = useState([]);
  const [rotaAtiva, setRotaAtiva] = useState(null);
  const [carregandoLocais, setCarregandoLocais] = useState(false);
  const [compartilhando, setCompartilhando] = useState(false);
  const [enderecoDestino, setEnderecoDestino] = useState('');
  const [coordenadasDestino, setCoordenadasDestino] = useState(null);
  const [distanciaAtual, setDistanciaAtual] = useState(null);

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

      Animated.spring(posicaoY, { toValue: 0, tension: 65, friction: 11, useNativeDriver: true }).start();
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

  // Localização + geocodificação reversa + envio à API
  useEffect(() => {
    let inscrito = true;
    let subscription = null;

    async function iniciarMonitoramento() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setEndereco('Permissão de localização negada');
        return;
      }
      const primeiraPosicao = await Location.getLastKnownPositionAsync({});
      if (primeiraPosicao && inscrito) {
        setLocation(primeiraPosicao.coords);
        atualizarEndereco(primeiraPosicao.coords);
      }
      subscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 5000, distanceInterval: 10 },
        (novaPosicao) => {
          if (inscrito) {
            setLocation(novaPosicao.coords);
            atualizarEndereco(novaPosicao.coords);
            enviarLocalizacaoAPI(novaPosicao.coords);
          }
        }
      );
    }

    iniciarMonitoramento();
    return () => {
      inscrito = false;
      if (subscription) subscription.remove();
    };
  }, [usuario]);

  useEffect(() => {
    if (location) {
      mapRef.current?.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    }
  }, [location]);

  const atualizarEndereco = async (coords) => {
    try {
      const [res] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude
      });

      if (res) {
        const rua = res.street || res.name || '';
        const bairro = res.district || res.subregion || '';
        setEndereco( rua && bairro ? `${rua}, ${bairro}` : rua || bairro );
      }
    } catch {
      setEndereco('Endereço indisponível');
    }
  };

  // POST /localizacao 
  const enviarLocalizacaoAPI = async (coords) => {
    if (!usuario?.id) return;
    try {
      await fetch(`${api}/localizacao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuaria: usuario.id, latitude: coords.latitude, longitude: coords.longitude }),
      });
    } catch { /* silencioso */ }
  };

  // GET /pontos-rota 
  const carregarPontosRota = useCallback(async () => {
    setCarregandoLocais(true);
    try {
      const res  = await fetch(`${api}/pontos-rota`);
      const json = await res.json();
      setPontosRota(Array.isArray(json) ? json : []);
    } catch { 
      setPontosRota([]); 
    } finally { 
      setCarregandoLocais(false); 
    }
  }, []);

  // GET /alertas
  const carregarAlertas = useCallback(async () => {
    if (!location) return;
    try {
      const res  = await fetch(`${api}/alertas?latitude=${location.latitude}&longitude=${location.longitude}&raio=5`);
      const json = await res.json();
      setAlertas(Array.isArray(json) ? json : []);
    } catch { 
      setAlertas([]); 
    }
  }, [location]);

  useEffect(() => {
    carregarPontosRota();
    if (location) carregarAlertas();

    const intervalo = setInterval(() => {
      carregarPontosRota();
      if (location) carregarAlertas();
    }, 5000);

    return () => clearInterval(intervalo);
  }, [location, carregarPontosRota, carregarAlertas]);

  // POST /salvarPesquisaEndereco 
  const salvarPesquisa = async (texto) => {
    if (!usuario?.id || !texto.trim()) return;
    try {
      await fetch(`${api}/salvarPesquisaEndereco`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuaria: usuario.id, endereco: texto }),
      });
    } catch { /* silencioso */ }
  };
  // -------

  // Filtra locais seguros conforme a usuária digita
  const filtroPesquisa = (texto) => {
    setPesquisa(texto);
    if (!texto.trim()) {
      setSugestoes([]);
      return;
    }
    const busca = texto.toLowerCase().trim();
    const resultado = pontosRota.filter((p) =>
      (p.nome || '').toLowerCase().includes(busca) ||
      (p.endereco || '').toLowerCase().includes(busca)
    );
    setSugestoes(resultado);
  };

  // Toca numa sugestão: centraliza mapa e limpa busca
  const selecionarSugestao = (ponto) => {
    setPesquisa('');
    setSugestoes([]);
    const destLat = Number(ponto.latitude);
    const destLng = Number(ponto.longitude);

    if (isNaN(destLat) || isNaN(destLng)) {
      Alert.alert("Erro", "Coordenadas do local são inválidas.");
      return;
    }
    setEnderecoDestino(ponto.nome || ponto.endereco);
    setCoordenadasDestino({ latitude: destLat, longitude: destLng });
    setModal(true);

    if (location) {
      const metros = getDistance(
        { latitude: location.latitude,  longitude: location.longitude },
        { latitude: destLat, longitude: destLng }
      );
      setDistanciaAtual(metros);
    }

    mapRef.current?.animateToRegion({
      latitude: destLat,
      longitude: destLng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    tracarRota(destLat, destLng);
  };

  // Busca livre: qualquer endereço digitado
  const buscarEndereco = async () => {
    if (!pesquisa.trim()) return;
    setBuscando(true);

    try {
      const pontoEncontrado = pontosRota.find((p) => (p.nome || '').toLowerCase().includes(pesquisa.toLowerCase().trim()));

      if (pontoEncontrado) {
        selecionarSugestao(pontoEncontrado);
        salvarPesquisa(pontoEncontrado.nome);
        return;
      }

      const resultados = await Location.geocodeAsync(pesquisa);

      if (resultados && resultados.length > 0) {
        const local = resultados[0];
        setEnderecoDestino(pesquisa);
        setModal(true);
        
        if (location) {
          const metros = getDistance(
            { latitude: location.latitude, longitude: location.longitude },
            { latitude: local.latitude, longitude: local.longitude }
          );
          setDistanciaAtual(metros);
        }

        mapRef.current?.animateToRegion({ 
          latitude: local.latitude, 
          longitude: local.longitude, 
          latitudeDelta: 0.01, 
          longitudeDelta: 0.01 
        }, 800);

        tracarRota(local.latitude, local.longitude);
        salvarPesquisa(pesquisa);
      } else {
        Alert.alert('Nenhum resultado', 'Local não encontrado');
      }
    } catch {
      Alert.alert('Erro', 'Falha ao buscar endereço');
    } finally {
      setBuscando(false);
    }
  };

  // Traçar rota via OSRM 
  const tracarRota = async (destLat, destLng) => {
    if (!location) return;
    const origLat = location.latitude;
    const origLng = location.longitude;

    try {
      const url = `https://router.project-osrm.org/route/v1/foot/${origLng},${origLat};${destLng},${destLat}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      const json = await res.json();

      if (json.code === 'Ok' && json.routes?.length > 0) {
        const coordenadas = json.routes[0].geometry.coordinates.map(([lng, lat]) => ({
          latitude: lat, longitude: lng,
        }));
        setRotaAtiva(coordenadas);
        } else {
        setRotaAtiva([{ latitude: origLat, longitude: origLng }, { latitude: destLat, longitude: destLng }]);
      }
    } catch {
      setRotaAtiva([{ latitude: origLat, longitude: origLng }, { latitude: destLat, longitude: destLng }]);
    }
  };

  // Compartilhar localização 
  const compartilharLocalizacao = async () => {
    if (!location) { Alert.alert('Localização indisponível', 'Aguarde a localização ser obtida.'); return; }
    setCompartilhando(true);
    const { latitude, longitude } = location;
    const link = `https://maps.google.com/?q=${latitude},${longitude}`;
    const mensagem = `🚨 Preciso de ajuda!\n📍 ${endereco}\n\n${link}`;
    try {
      await Share.share({ message: mensagem });
      await fetch(`${api}/localizacao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuaria: usuario?.id, latitude, longitude, compartilhado: true }),
      });
    } catch { 
      
    } finally { 
      setCompartilhando(false); 
    }
  };
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
            initialRegion={{
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
          {coordenadasDestino && (
            <Marker 
              coordinate={coordenadasDestino}
              title={enderecoDestino}
              pinColor="#a262e6"
            />
          )}
          {pontosRota.map((ponto) => {
            const pLat = Number(ponto.latitude);
            const pLng = Number(ponto.longitude);
            if (isNaN(pLat) || isNaN(pLng)) return null;

            return (
              <Marker
                key={ponto.id}
                coordinate={{ latitude: Number(ponto.latitude), longitude: Number(ponto.longitude) }}
                title={ponto.nome}
                description={ponto.endereco}
                onCalloutPress={() => selecionarSugestao(ponto)}
              >
                <View style={[
                  styles.pin,
                  ponto.tipo === 'delegacia' && { backgroundColor: '#4a90d9' },
                  ponto.tipo === 'saude' && { backgroundColor: '#e74c3c' },
                  ponto.tipo === 'apoio' && { backgroundColor: '#27ae60' },
                  ponto.tipo === 'estacao' && { backgroundColor: '#8e44ad' },
                ]}>
                  <Text style={{ fontSize: 14 }}>{ICONE_TIPO[ponto.tipo] || ICONE_TIPO.default}</Text>
                </View>
              </Marker>
            );
          })}
            {alertas.map((alerta) => {
              const aLat = Number(alerta.latitude);
              const aLng = Number(alerta.longitude);
              if (isNaN(aLat) || isNaN(aLng)) return null;

              return (
                <Marker
                  key={`alerta-${alerta.id}`}
                  coordinate={{ latitude: aLat, longitude: aLng }}
                  title={`⚠️ ${alerta.tipo_alerta || 'Alerta'}`}
                  description={alerta.descricao}
                  pinColor="#ff4444"
                />
              );
            })}
            {rotaAtiva && rotaAtiva.length > 0 && (
              <Polyline coordinates={rotaAtiva} strokeColor="#a262e6" strokeWidth={4} lineDashPattern={[0]} />
            )}
        </MapView>

        {modal && (
          <View style={styles.modalContainer}>
          <View style={styles.modalTopo}>
            <View style={styles.left}>
              <View style={styles.rowM}>
                <Image 
                  source={require('../../../assets/img/alert.png')}
                  style={{ width: 22, height: 22 }}
                  tintColor='#ccc'
                />
                <Text style={styles.text}>Sua localização atual</Text>
              </View>
              <View style={styles.linha}/>
              <View style={styles.rowM}>
                <Image 
                  source={require('../../../assets/img/pin.png')}
                  style={{ width: 22, height: 22 }}
                  tintColor='#ccc'
                />
                <Text style={styles.text} numberOfLines={2}>{enderecoDestino}</Text>
              </View>
              {distanciaAtual !== null && (
                <Text style={{ marginTop: 8, color: '#7A31D8', fontWeight: '700', paddingLeft: 8 }}>
                  {distanciaAtual >= 1000 ? `${(distanciaAtual / 1000).toFixed(1)} km` : `${distanciaAtual} metros`}
                </Text>
              )}
            </View>
              <Pressable style={styles.right} onPress={() => { setModal(false); setRotaAtiva(null); setDistanciaAtual(null); }}>
                <Image 
                  source={require('../../../assets/img/add.png')}
                  style={{ width: 20, height: 20, transform: [{ rotate: '45deg' }] }}
                  tintColor='#505050'
                />
              </Pressable>
          </View>
        </View>
        )}
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
                const y = event.nativeEvent.contentOffset.y;
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
                    value={pesquisa}
                    onChangeText={filtroPesquisa}
                    onSubmitEditing={buscarEndereco}
                    returnKeyType="search"
                  />
                  {pesquisa.length > 0 && (
                    <Pressable style={styles.btnSearch} onPress={buscarEndereco}>
                      <Image source={require('../../../assets/img/send.png')} style={{ width: 15, height: 15 }} tintColor="#fff" />
                    </Pressable>
                  )}
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
              {pesquisa.trim().length > 0 && (
                <View style={{
                  marginTop:10,
                  backgroundColor:'#fff',
                  borderRadius:18,
                  overflow:'hidden',
                  borderWidth: 1,
                  borderColor: '#eee',
                  elevation: 5,        
                  zIndex: 9999,  
                  position: 'relative'
                  }}
                >
                {sugestoes.length > 0 ? (
                  sugestoes.map((item)=>(
                    <Pressable key={`sugestao-${item.id}`} style={{ padding: 14, borderBottomWidth: 1, borderColor: '#eee' }} onPress={() => selecionarSugestao(item)} >
                      <Text style={{ fontWeight: '700' }}>
                        {ICONE_TIPO[item.tipo] || ICONE_TIPO.default} {item.nome}
                      </Text>
                      <Text style={{ color: '#666', marginTop: 4 }}>{item.endereco}</Text>
                    </Pressable>
                    ))
                    ) : (
                      <Text style={{ padding: 15, color: '#777' }}>Nenhum local encontrado</Text>
                    )}
                    </View>
                  )}
              <View style={styles.contentPainel} onTouchStart={() => setScrollAtivo(true)}>
                <Text style={styles.subtitulo}>Deseja compartilhar sua localização atual?</Text>
                <Pressable 
                  style={styles.button}
                  onPress={compartilharLocalizacao}
                  disabled={compartilhando}
                >
                  <Text style={styles.txWhite}>{compartilhando ? 'Compartilhando...' : 'Compartilhar'}</Text>
                  <Image source={require('../../../assets/img/share_1.png')}
                    style={{ width: 15, height: 15 }}
                    tintColor='#fff'
                  />
                </Pressable>
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