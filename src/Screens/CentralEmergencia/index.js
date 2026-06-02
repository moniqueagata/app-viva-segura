import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

import BottomNavGuardiao from "../../components/BottomNavGuardiao";
import { useEffect, useState } from "react";

import { Linking, Alert } from "react-native";


export default function CentralEmergencia() {
  const navigation = useNavigation();

  const ligarEmergencia = async (item) => {
  try {
    Alert.alert(
      "Emergência",
      `Deseja ligar para a emergência agora?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Ligar",
          onPress: async () => {
            await Linking.openURL("tel:190");
          },
        },
      ]
    );
  } catch (error) {
    console.log("Erro ao ligar emergência:", error);
  }
};

  const [alertas, setAlertas] = useState([]);

  // MOCK (depois você troca pela API)
  useEffect(() => {
    const dadosFakes = [
      {
        id: 1,
        nome: "Maria Silva",
        status: "ATIVO",
        distancia: "120m",
        hora: "Agora",
        foto: null,
      },
      {
        id: 2,
        nome: "Ana Souza",
        status: "ATIVO",
        distancia: "350m",
        hora: "2 min atrás",
        foto: null,
      },
      {
        id: 3,
        nome: "Juliana Costa",
        status: "ATIVO",
        distancia: "800m",
        hora: "5 min atrás",
        foto: null,
      },
    ];

    setAlertas(dadosFakes);
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* topo */}
      <View style={styles.row}>
        <View style={styles.fotoBox}>
          <Image
            source={
              item.foto
                ? { uri: item.foto }
                : require("../../../assets/imgHomeGuardiao/perfil.png")
            }
            style={styles.foto}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.status}>● {item.status}</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.distancia}</Text>
        </View>
      </View>

      {/* info */}
      <Text style={styles.info}>
        Emergência ativa • recebido {item.hora}
      </Text>

      {/* ações */}
      <View style={styles.actions}>
        <Pressable
          style={styles.btnSecundario}
          onPress={() =>
            navigation.navigate("AcompanharRota", { usuaria: item })
          }
        >
          <Text style={styles.btnTextSec}>Acompanhar rota</Text>
        </Pressable>

       <Pressable
  style={[styles.btnPrincipal, { backgroundColor: "#d32a27" }]}
  onPress={() => ligarEmergencia(item)}
>
  <Text style={styles.btnText}>Acionar SOS</Text>
</Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Central de Emergência</Text>

      <Text style={styles.subtitle}>
        Alertas ativos em tempo real
      </Text>

      <FlatList
        data={alertas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      <BottomNavGuardiao abaAtivaInicial={2} />
    </SafeAreaView>
  );
}