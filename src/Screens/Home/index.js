import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  Text,
  Pressable,
  useWindowDimensions,
  Animated,
} from "react-native";
import styles from "./styles";
import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../../components/BottomNav";

import * as Location from "expo-location";
import api from "../../services/api";
import { Alert } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
    
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

  const [holding, setHolding] = useState(false);
  const holdTimeout = useRef(null);

  const enviarSOS = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (!user) return;

      const usuario = JSON.parse(user);

      const permissao = await Location.requestForegroundPermissionsAsync();

      if (permissao.status !== "granted") {
        Alert.alert("Permissão negada");
        return;
      }

      const local = await Location.getCurrentPositionAsync({});

      await api.post("/botao-panico", {
        id_usuaria: usuario.id_usuaria,
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
      });

      Alert.alert("🚨 SOS enviado!");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao enviar SOS");
    }
  };

  const iniciarHold = () => {
    setHolding(true);

    holdTimeout.current = setTimeout(() => {
      enviarSOS();
      setHolding(false);
    }, 3000);
  };

  const cancelarHold = () => {
    setHolding(false);

    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }
  };

  // Animação na navegação
    const { width } = useWindowDimensions();
    const [medidas, setMedidas] = useState({});
    const [abaAtiva, setAbaAtiva] = useState(0);
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
    <View style={styles.container}>
      <View style={styles.viewFlex}>
        <View style={styles.userContent}>
          <View style={styles.upload}>
            {usuario?.foto ? (
                <Image 
                    source={{ uri: usuario.foto }} 
                    style={{ width: 45, height: 45, borderRadius: 22.5 }}
                />
            ) : (
                <Image 
                    source={require('../../../assets/img/icon.png')} 
                    style={{ width: 45, height: 45 }} 
                    resizeMode='contain' 
                />
            )}
          </View>           
            <Text style={styles.text}>
                Ola, {usuario?.nome ? usuario.nome.split(' ')[0] : ''}!
            </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Notificacoes")}>
          <Image source={require('../../../assets/img/sino_1.png')}
            style={{ width: 20, height: 20 }} 
            tintColor='#370075' 
          />
        </Pressable>
      </View>
      <View style={styles.content}>
          <Text style={styles.textoAjuda}>Precisando de ajuda? Use o SOS</Text>

          <Pressable
            style={[
                styles.sos,
                holding && { opacity: 0.6, transform: [{ scale: 0.95 }] }
            ]}        
            onPressIn={iniciarHold}
            onPressOut={cancelarHold}
          >
            <Image
              source={require("../../../assets/img/Home/sos.jpeg")}
              style={styles.imagemSos}
            />
          </Pressable>

          <Text style={styles.textoEmergencia}>EMERGÊNCIA</Text>

          <Text style={styles.textoSosPequeno}>
            Pressione o botão por 3 segundos para{" "}
          </Text>
          <Text style={styles.textoSosPequeno2}>
            mandar sua geolocalização ao seu guardião
          </Text>

          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate("MeusEnderecos")}
          >
            <Image
              source={require("../../../assets/img/Home/iconeBotao(1).jpeg")}
              style={styles.imagem}
            />
            <Text style={styles.texto}>Meus endereços</Text>
          </Pressable>

          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate("Telefones")}
          >
            <Image
              source={require("../../../assets/img/Home/iconeBotao(2).jpeg")}
              style={styles.imagem}
            />
            <Text style={styles.texto}>Telefones públicos</Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={() => navigation.navigate('AdicionarPontoSeguro')}>
            <Image
              source={require("../../../assets/img/Home/iconeBotao(3).jpeg")}
              style={styles.imagem}
            />
            <Text style={styles.texto}>Pontos Seguros</Text>
          </Pressable>
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
      <StatusBar style="auto" />
    </View>
  );
}
