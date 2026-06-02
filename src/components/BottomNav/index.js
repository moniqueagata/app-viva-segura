import { View, Image, Pressable, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState, useEffect } from "react";

export default function BottomNav({ abaAtivaInicial = 0 }) {
  const navigation = useNavigation();

  const [abaAtiva, setAbaAtiva] = useState(abaAtivaInicial);

  const abas = [
    { rota: "Home", imagem: require("../../../assets/img/home.png"), index: 0 },
    { rota: "Mapa", imagem: require("../../../assets/img/map.png"), index: 1 },
    { rota: "MeusGuardioes", imagem: require("../../../assets/img/angel.png"), index: 2 },
    { rota: "Perfil", imagem: require("../../../assets/img/profile.png"), index: 3 },
  ];

  return (
    <View
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 80,
    width: "100%",

    flexDirection: "row",
    backgroundColor: "#550FA4",
    justifyContent: "space-around",
    alignItems: "center",
  }}
>
      {abas.map((aba) => (
        <Pressable
          key={aba.index}
          onPress={() => {
            setAbaAtiva(aba.index);
            if (aba.rota) navigation.navigate(aba.rota);
          }}
        >
          <Image
            source={aba.imagem}
            style={{ width: 28, height: 28 }}
            tintColor={abaAtiva === aba.index ? "#FF88A7" : "#fff"}
          />
        </Pressable>
      ))}
    </View>
  );
}