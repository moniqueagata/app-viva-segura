  import { StatusBar } from "expo-status-bar";
  import {
    Image,
    ScrollView,
    View,
    Text,
    Pressable,
    Animated,
    Easing,
    useWindowDimensions,
  } from "react-native";
  import styles from "./styles";
  import { useNavigation } from "@react-navigation/native";
  import { useState, useEffect, useRef } from "react";

  import BottomNav from "../../components/BottomNav";

  import AsyncStorage from "@react-native-async-storage/async-storage";

  export default function Perfil() {
    const navigation = useNavigation();

    

    //pegar dados da usuaria
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
      const carregarUsuario = async () => {
        const dados = await AsyncStorage.getItem("user");

        if (dados) {
          setUsuario(JSON.parse(dados));
        }
      };

      carregarUsuario();
    }, []);


    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            
            <View style={styles.profile}>
              <View style={styles.photoUpload}>
                
               <View style={styles.upload}>
  <Image
    source={
      usuario?.foto
        ? { uri: usuario.foto }
        : require("../../../assets/imgHomeGuardiao/perfil.png")
    }
    style={{
      width: "100%",
      height: "100%",
      borderRadius: 999,
    }}
    resizeMode="cover"
  />
</View>

              </View>

              <Text style={styles.nome}>{usuario?.nome || "Nome"}</Text>

              <Text style={styles.id}>
                  Código: {usuario?.codigo_convite || "----"}
              </Text>

              <Pressable
                style={styles.buttonEdit}
                onPress={() => navigation.navigate("EditarPerfil")}
              >
                <Text style={styles.textWhite}>Editar perfil</Text>
              </Pressable>
            </View>

            <View style={styles.settings}>
              <Text style={styles.sessions}>Preferências</Text>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Notificacoes")}
              >
                <View style={styles.grid}>
                  <View style={styles.circle}>
                    <Image
                      source={require("../../../assets/img/sino.png")}
                      style={{ width: 23, height: 23 }}
                      tintColor="#616161"
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.textButton}>Notificações</Text>
                </View>
                <Image
                  source={require("../../../assets/img/arrow_2.png")}
                  style={{ width: 15, height: 15,  transform: [{ scaleX: -1 }] }}
                  tintColor="#4B0082"               
                  />
              </Pressable>

              
              <Text style={styles.sessions}>Suporte</Text>
              <View style={styles.gridButtons}>
                <Pressable style={styles.button}>
                  <View style={styles.grid}>
                    <View style={styles.circle}>
                      <Image
                        source={require("../../../assets/img/password.png")}
                        style={{ width: 23, height: 23 }}
                        tintColor="#4B0082"
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.textButton}>Alterar senha</Text>
                  </View>
                  <Image
                    source={require("../../../assets/img/arrow_2.png")}
                    style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                    tintColor="#4B0082"
                  />
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => navigation.navigate("Central")}
                >
                  <View style={styles.grid}>
                    <View style={styles.circle}>
                      <Image
                        source={require("../../../assets/img/helpcenter.png")}
                        style={{ width: 23, height: 23 }}
                        tintColor="#4B0082"
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.textButton}>Central de ajuda</Text>
                  </View>
                  <Image
                    source={require("../../../assets/img/arrow_2.png")}
                    style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                    tintColor="#4B0082"
                  />
                </Pressable>
                <Pressable style={styles.button}>
                  <View style={styles.grid}>
                    <View style={styles.circle}>
                      <Image
                        source={require("../../../assets/img/terms.png")}
                        style={{ width: 23, height: 23 }}
                        tintColor="#4B0082"
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.textButton}>Termos</Text>
                  </View>
                  <Image
                    source={require("../../../assets/img/arrow_2.png")}
                    style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                    tintColor="#4B0082"
                  />
                </Pressable>
              </View>

              <View style={styles.logout}>
                <Pressable style={styles.buttonLogout} 
                  onPress={() => navigation.navigate("Welcome")}>
                  <Text style={styles.textRed}>Sair da conta</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>

        <BottomNav abaAtivaInicial={3} />

        
        <StatusBar style="auto" />
      </View>
    );
  }
