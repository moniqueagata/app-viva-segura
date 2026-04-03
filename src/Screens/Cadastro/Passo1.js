import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles_passo1';

export default function Passo1() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>
      </View>

      <Text style={styles.txContexto}>Escolha seu perfil</Text>
        
        <View style={styles.viewLogo}>
          <Image source={require('../../../assets/img/isotipo1.png')} style={styles.logo} />
        </View>

        <Text style={styles.titulo}>Como você vai usar o aplicativo?</Text>

        <View style={styles.viewCard}>
            <Pressable style={styles.card} onPress={() => navigation.navigate('Passo2')}>
              <Image source={require('../../../assets/img/usuaria.png')} style={styles.icone} />
              <View style={styles.viewDesc}>
                <Text style={styles.tituloCard}>Usuária</Text>
                <Text style={styles.desc}>Permita que pessoas de confiança acompanhem você</Text>
              </View>
            </Pressable>

            <Pressable style={styles.card}>
                <Image source={require('../../../assets/img/guardiao.png')} style={styles.icone} />
              <View style={styles.viewDesc}>
                <Text style={styles.tituloCard}>Guardião</Text>
                <Text style={styles.desc}>Veja trajetos em tempo real e receba alertas</Text>
              </View>
            </Pressable>
        </View>

          <View style={styles.linkView}>
            <Text style={styles.txLink}>Já possui uma Conta?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.link}>Entrar</Text></Pressable>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}