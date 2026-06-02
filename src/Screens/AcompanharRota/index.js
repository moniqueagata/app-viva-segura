import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Modal,
  Animated,
  Pressable,
  PanResponder,
  SafeAreaView,
  Image,
} from "react-native";

import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDistance } from "geolib";
import styles from "./styles";
import * as Battery from "expo-battery";
import { Linking } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function AcompanharRota() {
  const [locationUsuaria, setLocationUsuaria] = useState(null);
  const [locationGuardiao, setLocationGuardiao] = useState(null);

  const [fotoGuardiao, setFotoGuardiao] = useState(null);
  const [fotoUsuaria, setFotoUsuaria] = useState(null);

  const [distancia, setDistancia] = useState(0);

  const [rua, setRua] = useState("");
  const [localizacaoTexto, setLocalizacaoTexto] = useState("");

  const [bateria, setBateria] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(1000)).current;

  const route = useRoute();
  const { usuaria } = route.params;

  useEffect(() => {
    carregarTudo();
  }, []);

  const [horaInicio] = useState(
    new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  const carregarTudo = async () => {
    // FOTO DA USUÁRIA
    if (usuaria?.foto) {
      setFotoUsuaria(usuaria.foto);
    }

    // FOTO DO GUARDIÃO
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const usuarioConvertido = JSON.parse(user);

      if (usuarioConvertido?.foto) {
        setFotoGuardiao(usuarioConvertido.foto);
      }
    }

    // LOCALIZAÇÃO EM TEMPO REAL
    const permissao = await Location.requestForegroundPermissionsAsync();

    if (permissao.status !== "granted") {
      return;
    }

    const local = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    // GUARDIÃO
    const latitudeGuardiao = local.coords.latitude;
    const longitudeGuardiao = local.coords.longitude;

    setLocationGuardiao({
      latitude: latitudeGuardiao,
      longitude: longitudeGuardiao,
    });

    // USUÁRIA
    // MESMO LUGAR com diferença mínima
    setLocationUsuaria({
      latitude: latitudeGuardiao + 0.00004,
      longitude: longitudeGuardiao + 0.00004,
    });

    const enderecoReal = await Location.reverseGeocodeAsync({
      latitude: latitudeGuardiao,
      longitude: longitudeGuardiao,
    });

    if (enderecoReal.length > 0) {
      const local = enderecoReal[0];

      setRua(`${local.street || "Rua"} ${local.streetNumber || ""}`);

      setLocalizacaoTexto(`${local.district || ""} • ${local.city || ""}`);
    }

    const distanciaMetros = getDistance(
      {
        latitude: latitudeGuardiao,
        longitude: longitudeGuardiao,
      },
      {
        latitude: latitudeGuardiao + 0.00005,
        longitude: longitudeGuardiao + 0.00005,
      },
    );

    setDistancia(distanciaMetros);

    const batteryLevel = await Battery.getBatteryLevelAsync();

    setBateria(Math.round(batteryLevel * 100));
  };

  // ENQUANTO CARREGA
  if (!locationGuardiao || !locationUsuaria) {
    return (
      <View style={styles.loading}>
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  const abrirSheet = () => {
    setModalVisible(true);

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fecharSheet = () => {
    Animated.timing(slideAnim, {
      toValue: 600,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const ligar190 = async () => {
    try {
      await Linking.openURL("tel:190");
    } catch (error) {
      console.log("Erro ao abrir discador:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: locationGuardiao.latitude,
          longitude: locationGuardiao.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        {/* USUÁRIA */}
        {/* USUÁRIA */}
        <Marker coordinate={locationUsuaria}>
          <Image
            source={
              fotoUsuaria
                ? { uri: fotoUsuaria }
                : require("../../../assets/imgHomeGuardiao/perfil.png")
            }
            style={[
              styles.markerImage,
              {
                borderColor: "#6925b8",
                borderWidth: 3,
              },
            ]}
          />
        </Marker>

        {/* GUARDIÃO */}
        <Marker coordinate={locationGuardiao}>
          <Image
            source={
              fotoGuardiao
                ? { uri: fotoGuardiao }
                : require("../../../assets/imgHomeGuardiao/perfil.png")
            }
            style={[
              styles.markerImage,
              {
                borderColor: "#56CDA6",
                borderWidth: 3,
              },
            ]}
          />
        </Marker>

        {locationGuardiao && locationUsuaria && (
          <Polyline
            coordinates={[locationGuardiao, locationUsuaria]}
            strokeColor="#7B2CBF"
            strokeWidth={5}
          />
        )}
      </MapView>

      {/* CARD */}
      <View style={styles.card}>
        <View style={styles.fotoContainer}>
          <Image
            source={
              fotoUsuaria
                ? { uri: fotoUsuaria }
                : require("../../../assets/imgHomeGuardiao/perfil.png")
            }
            style={styles.fotoCard}
          />
        </View>

        <Text style={styles.nome}>{usuaria.nome}</Text>

        <Text style={styles.texto}>
          Compartilhando localização em tempo real
        </Text>

        <View style={styles.distanciaBox}>
          <View style={styles.bolinhaVerde} />

          <Text style={styles.distanciaTexto}>{distancia}m de distância</Text>
        </View>

        <Text style={styles.cidade}>São Paulo</Text>

        <Text style={styles.cidade}>Desde às {horaInicio}</Text>

        <Pressable style={styles.botaoAbrir} onPress={abrirSheet}>
          <Text style={styles.textoBotao}>Ver detalhes</Text>
        </Pressable>
      </View>

      {/* Modal */}

      <Modal transparent visible={modalVisible} animationType="none">

        <Pressable style={styles.overlay} onPress={fecharSheet} />

        {/* bottom sheet separado do overlay */}
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
<Pressable onPress={fecharSheet} style={styles.linha} />

          <View style={styles.rowTop}>
            <View>
              <Text style={styles.nomeModal}>{usuaria.nome}</Text>

              <Text style={styles.status}>● Em movimento</Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>8m</Text>
            </View>
          </View>

          <Text style={styles.endereco}>{rua}</Text>

          <Text style={styles.bairro}>{localizacaoTexto}</Text>

          <View style={styles.cardMini}>
            <View style={styles.infoLinha}>
              <Text style={styles.label}>Última atualização</Text>

              <Text style={styles.valor}>Agora mesmo</Text>
            </View>

            <View style={styles.infoLinha}>
              <Text style={styles.label}>Compartilhando desde</Text>

              <Text style={styles.valor}>{horaInicio}</Text>
            </View>


            <View style={styles.infoLinha}>
              <Text style={styles.label}>Bateria</Text>

              <View style={styles.valorContainer}>
                <View style={styles.bateriaIcone}>
                  <View
                    style={[
                      styles.bateriaNivel,
                      {
                        width: `${bateria}%`,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.valor}>{bateria}%</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardMapa}>
            <Pressable
            >
              <MapView
                style={styles.mapMini}
                region={{
                  latitude: locationGuardiao.latitude,
                  longitude: locationGuardiao.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker coordinate={locationUsuaria}>
                  <Image
                    source={
                      fotoUsuaria
                        ? { uri: fotoUsuaria }
                        : require("../../../assets/imgHomeGuardiao/perfil.png")
                    }
                    style={styles.markerImage}
                  />
                </Marker>
              </MapView>
            </Pressable>

            <View style={styles.mapaInfo}>
              <Text style={styles.endereco2}>
                {rua || "Localização atual"}
              </Text>

              <Text style={styles.bairro2}>{localizacaoTexto}</Text>

              <Text style={styles.distanciaMapa}>
                {distancia}m de distância
              </Text>
            </View>
          </View>


          <Pressable style={styles.botaoCompartilhar} onPress={ligar190}>
            <Text style={styles.botaoText}>Acionar SOS</Text>
          </Pressable>

        </Animated.View>
      </Modal>

    </SafeAreaView>
  );
}
