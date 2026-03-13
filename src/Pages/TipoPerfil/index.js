import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function TipoPerfil() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <View style={styles.navbar}>
            <Pressable>
              <Image source={require('../../../assets/img/exit1.png')} style={styles.iconExit} />
            </Pressable>
          </View>

          <Image source={require('../../../assets/img/isotipo1.png')} style={styles.isotipo} />

          <Text style={styles.subtitulo}>Escolha seu perfil</Text>

          <View style={styles.btnView}>
            <Pressable style={styles.btnPurple} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.txWhite}>Protegida</Text>
            </Pressable>
            <Text style={styles.txDesc}>Compartilho minha localização 👩</Text>

            <Pressable style={styles.btnWhite} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.txPurple}>Guardião</Text>
            </Pressable>
            <Text style={styles.txDesc}>Acompanho o trajeto 😇</Text>
          </View>

      <StatusBar style="auto" />
    </View>
  );
}