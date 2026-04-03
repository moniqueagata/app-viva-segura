import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import styles from'./styles/styles_confirmacao';

export default function Confirmacao() {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const confirmaCadastro = async () => {
      try {
        const usuario = route.params;
        console.log("Dados que estão sendo salvos:", usuario);

        if (usuario) {
          await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        }
        } catch (error) {
          console.error("Erro ao salvar cadastro:", error);
        }
    };
    confirmaCadastro();
  }, [navigation, route.params]);

  return (
    <View style={styles.container}>
        <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>

        <View style={styles.viewCheck}>
          <View style={styles.checkIcon}><Image source={require('../../../assets/img/check_1.png')} style={styles.icone} /></View>
        </View>

        <Text style={styles.titulo}>Cadastro concluído com sucesso!</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        <Pressable style={styles.botaoConcluir} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoConcluir}>Continuar</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}