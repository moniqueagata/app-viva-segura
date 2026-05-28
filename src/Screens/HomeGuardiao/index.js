import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import api from "../../services/api";

import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import * as Location from "expo-location";
import BottomNavGuardiao from "../../components/BottomNavGuardiao";

import { Animated, Easing } from "react-native";


export default function HomeGuardiao() {
  const navigation = useNavigation();


  const [nomeGuardiao, setNomeGuardiao] = useState("");
  const [fotoGuardiao, setFotoGuardiao] = useState(null);

  const [usuarios, setUsuarios] = useState([]);

  const [alertas, setAlertas] = useState([]);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
  if (alertas.length > 0) {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  } else {
    pulseAnim.setValue(1);
  }
}, [alertas]);

const buscarAlertas = async () => {
  try {
    const res = await api.get("/botao-panico-ativos");
    setAlertas(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

useEffect(() => {
  console.log("🟢 ALERTAS USEEFFECT ATIVO");

  buscarAlertas(); // primeira chamada obrigatória

  const interval = setInterval(() => {
    console.log("🔁 ATUALIZANDO ALERTAS...");
    buscarAlertas();
  }, 5000);

  return () => clearInterval(interval);
}, []);



  useEffect(() => {
    const carregarUsuario = async () => {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        const usuarioConvertido = JSON.parse(user);
        setNomeGuardiao(usuarioConvertido.nome);
        setFotoGuardiao(usuarioConvertido.foto);
      }
    };

    carregarUsuario();
  }, []);

  useEffect(() => {
    const carregarUsuarios = async () => {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        const usuarioConvertido = JSON.parse(user);
        console.log("USER COMPLETO:", usuarioConvertido);
        const idGuardiao = usuarioConvertido.id_usuaria;

        fetch(`http://10.67.4.174:8000/api/guardiao/home/${idGuardiao}`)
          .then((res) => res.json())
          .then((json) => {
            console.log("RESPOSTA JSON:", json);
            setUsuarios(json.data);
          })
          .catch((err) => {
            console.log("ERRO FETCH:", err);
          });
      }
    };

    carregarUsuarios();
  }, []);

  

  
  

  const [location, setLocation] = useState(null);
  const [endereco, setEndereco] = useState("");
  const [distancia, setDistancia] = useState("");

  useEffect(() => {
    const buscarLocalizacao = async () => {
      try {
        // LOCALIZAÇÃO DA USUÁRIA
        const response = await axios.get(
          "http://10.67.4.174:8000/api/localizacao/1",
        );

        const dados = response.data.data;

        const latitudeUsuaria = parseFloat(dados.latitude);
        const longitudeUsuaria = parseFloat(dados.longitude);

        setLocation({
          latitude: latitudeUsuaria,
          longitude: longitudeUsuaria,
        });

        // ENDEREÇO DA USUÁRIA
        const enderecoConvertido = await Location.reverseGeocodeAsync({
          latitude: latitudeUsuaria,
          longitude: longitudeUsuaria,
        });

        if (enderecoConvertido.length > 0) {
          const local = enderecoConvertido[0];

          setEndereco(`${local.street || ""}, ${local.streetNumber || ""}`);
        }

        // LOCALIZAÇÃO DO GUARDIÃO
        const permissao = await Location.requestForegroundPermissionsAsync();

        if (permissao.status === "granted") {
          const localGuardiao = await Location.getCurrentPositionAsync({});

          const latitudeGuardiao = localGuardiao.coords.latitude;
          const longitudeGuardiao = localGuardiao.coords.longitude;

          // CALCULAR DISTÂNCIA
          const distanciaMetros = calcularDistancia(
            latitudeGuardiao,
            longitudeGuardiao,
            latitudeUsuaria,
            longitudeUsuaria,
          );

          setDistancia(Math.round(distanciaMetros));
        }
      } catch (error) {
        console.log("Erro:", error);
      }
    };

    buscarLocalizacao();

    const interval = setInterval(buscarLocalizacao, 5000);

    return () => clearInterval(interval);
  }, []);

  function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371e3;

    const radiano = (grau) => grau * (Math.PI / 180);

    const dLat = radiano(lat2 - lat1);
    const dLon = radiano(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(radiano(lat1)) *
        Math.cos(radiano(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />

     

      {/* HEADER - Fora do ScrollView para ficar fixo no topo */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
          paddingVertical: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => navigation.navigate("PerfilGuardiao")}>
            {fotoGuardiao ? (
              <Image
                source={{ uri: fotoGuardiao }}
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 12,
                  borderRadius: 100,
                }}
              />
            ) : (
              <Image
                source={require("../../../assets/imgHomeGuardiao/perfil.png")}
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 12,
                }}
              />
            )}
          </Pressable>

          <Text style={{ color: "#4B0082", fontSize: 20, fontWeight: "bold" }}>
            Olá, {nomeGuardiao}
          </Text>
        </View>

        <View>
          <Pressable>
            <Image
              source={require("../../../assets/imgHomeGuardiao/sino.png")}
              style={{ width: 35, height: 35, tintColor: "#87D3B6" }}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 40,
        }}
      >
        {usuarios.map((item) => (
          <View key={item.id} style={styles.container}>
            <View style={styles.headerRow}>
              <Image
                source={require("../../../assets/imgHomeGuardiao/perfil.png")}
                style={styles.avatarImage}
              />

              <Text style={styles.headerText}>
                Você está protegendo{" "}
                <Text style={{ fontWeight: "bold" }}>{item.usuaria.nome}.</Text>
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "#ddd",
                }}
              >
                <View style={{ flex: 1 }}>
                  {location && (
                    <MapView
                      style={{ flex: 1 }}
                      region={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                      }}
                    >
                      <Marker coordinate={location} />
                    </MapView>
                  )}
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingLeft: 15,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#A0522D", fontSize: 13, lineHeight: 18 }}
                >
                  {item.usuaria.nome} está a {distancia} metros de você.
                </Text>

                <Text
                  style={{
                    color: "#777",
                    fontSize: 12,
                    marginTop: 6,
                  }}
                >
                  {endereco}
                </Text>

                <Pressable
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("AcompanharRota", {
                      usuaria: item.usuaria,
                    })
                  }
                >
                  <Text style={styles.buttonText}>Acompanhar Rota</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

  {Array.isArray(alertas) && alertas.length > 0 && (
  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.55)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Animated.View
      style={{
        width: "85%",
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 22,
        alignItems: "center",
        transform: [{ scale: pulseAnim }],
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
        borderLeftWidth: 6,
        borderLeftColor: "#FF3B30",
      }}
    >
      {/* ÍCONE */}
      <Text style={{ fontSize: 28, marginBottom: 8 }}>
        🚨
      </Text>

      {/* TÍTULO */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#1C1C1E",
        }}
      >
        Alerta de Emergência
      </Text>

      {/* SUBTEXTO */}
      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          color: "#6E6E73",
          textAlign: "center",
          lineHeight: 20,
        }}
      >
        {alertas.length} Alertas ativos agora
      </Text>

      {/* BOTÃO */}
      <Pressable
        onPress={() => setAlertas([])}
        style={{
          marginTop: 18,
          backgroundColor: "#F2F2F7",
          paddingHorizontal: 22,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#FF3B30", fontWeight: "600" }}>
          Entendi
        </Text>
      </Pressable>
    </Animated.View>
  </View>
)}

      <BottomNavGuardiao abaAtivaInicial={0} />
    </SafeAreaView>
  );
}
