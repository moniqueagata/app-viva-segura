import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  useWindowDimensions,
  Animated,
  ActivityIndicator,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import { StatusBar } from "expo-status-bar";

export default function MeusGuardioes() {
  const navigation = useNavigation();

  const [guardioes, setGuardioes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [idUsuario, setIdUsuario] = useState(null);

  // pega usuário logado
  useEffect(() => {
    const carregarUser = async () => {
      const dados = await AsyncStorage.getItem("user");
      const usuario = JSON.parse(dados);

      setIdUsuario(usuario.id_usuaria);
    };

    carregarUser();
  }, []);

  // busca guardiões quando tiver id
  useEffect(() => {
    if (idUsuario) {
      carregarGuardioes();
    }
  }, [idUsuario]);

  const carregarGuardioes = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/guardioes/${idUsuario}`);

      setGuardioes(response.data);

    } catch (error) {
      console.log("ERRO AO CARREGAR:", error);
    } finally {
      setLoading(false);
    }
  };

  const removerGuardiao = async (id) => {
    try {
      await api.delete(`/guardioes/${idUsuario}/${id}`);

      carregarGuardioes();

    } catch (error) {
      console.log("ERRO AO REMOVER:", error);
    }
  };

  // ---------------- NAV ANIMATION ----------------

  const { width } = useWindowDimensions();

  const [medidas, setMedidas] = useState({});
  const [abaAtiva, setAbaAtiva] = useState(2);
  const larguraAba = 60;
  const posicaoX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const medidaAtual = medidas[abaAtiva];

    if (medidaAtual) {
      const { x, width } = medidaAtual;

      const destinoX = x + width / 2 - larguraAba / 2;

      Animated.spring(posicaoX, {
        toValue: destinoX,
        useNativeDriver: true,
        bounciness: 4,
      }).start();
    }
  }, [abaAtiva, medidas]);

  const abaLayout = (index, event) => {
    const { x, width } = event.nativeEvent.layout;

    setMedidas((prev) => ({
      ...prev,
      [index]: { x, width },
    }));
  };

  const abas = [
    { label: "Home", rota: "Home", imagem: require("../../../assets/img/home.png"), index: 0 },
    { label: "Mapa", rota: "Mapa", imagem: require("../../../assets/img/map.png"), index: 1 },
    { label: "Guardião", rota: "MeusGuardioes", imagem: require("../../../assets/img/angel.png"), index: 2 },
    { label: "Você", rota: "Perfil", imagem: require("../../../assets/img/profile.png"), index: 3 },
  ];

  // ---------------- UI ----------------

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Meus guardiões</Text>

          <Image
            source={require("../../../assets/img/angel.png")}
            style={styles.tituloIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitulo}>
          Convites enviados por email para seus guardiões.
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#ff80aa" />
        ) : (
          <FlatList
            data={guardioes}
            keyExtractor={(item) => item.id.toString()}

            ListEmptyComponent={
              <View style={styles.vazio}>
                <Image
                  source={require("../../../assets/img/angel.png")}
                  style={{ width: 48, height: 48 }}
                  tintColor="#ccc"
                />
                <Text style={styles.vazioTexto}>
                  Nenhum convite enviado ainda.
                </Text>
              </View>
            }

            renderItem={({ item }) => (

              <View style={styles.card}>

                <View style={styles.cardInfo}>
                  <View style={styles.cardTopo}>
                    <Text style={styles.cardNome}>{item.nome}</Text>
                    <Text style={styles.badge}>Ativa</Text>
                  </View>


                  <Text style={styles.cardTelefone}>{item.email}</Text>
                </View>

                <View style={styles.cardAcoes}>

                  <Pressable style={styles.btnChat}
                    onPress={() => navigation.navigate('ChatGuardiao',
                      { nomeGuardiaoCadastroCodigo: g.nomeGuardiaoCadastroCodigo })} >

                    <Text style={styles.btnChatText}>
                      chat
                    </Text>
                  </Pressable>

                  <Pressable style={styles.btnRemover} >

                    <Text style={styles.btnRemoverTexto}>
                      ✕
                    </Text>

                  </Pressable>

                </View>

              </View>
            )}
          />
        )}

        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("AddGuardiao")}
        >
          <Text style={styles.buttonText}>Novo Guardião +</Text>
        </Pressable>

      </View>

      {/* NAV BAR */}
      <View style={styles.navegacao}>

        <Animated.View
          style={[
            styles.line,
            {
              width: larguraAba,
              transform: [{ translateX: posicaoX }],
            },
          ]}
        />

        {abas.map((aba) => (
          <Pressable
            key={aba.index}
            style={styles.buttonNav}
            onPress={() => {
              setAbaAtiva(aba.index);
              navigation.navigate(aba.rota);
            }}
            onLayout={(e) => abaLayout(aba.index, e)}
          >
            <Image
              source={aba.imagem}
              style={{ width: 22, height: 22 }}
              tintColor={abaAtiva === aba.index ? "#ff80aa" : "#fff"}
            />

            <Text
              style={[
                styles.textNav,
                abaAtiva === aba.index && { color: "#ff80aa" },
              ]}
            >
              {aba.label}
            </Text>
          </Pressable>
        ))}

      </View>

      <StatusBar style="auto" />

    </View>
  );
}