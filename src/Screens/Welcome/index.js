import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/img/logo.png')} 
            style={{ width: 90, height: 90 }}
            resizeMode='contain'
          />
        </View>

        <View style={styles.session}>
          <Image source={require('../../../assets/img/welcome.png')} 
            style={{ width: 300, height: 300, marginBottom: 22 }}
            resizeMode='contain'
          />
          <Text style={styles.titulo}>Viva segura</Text>
          <Text style={styles.subtitulo}>Mais segurança nos trajetos do seu dia a dia</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.btnPurple} onPress={() => navigation.navigate('Passo1')}>
            <Text style={styles.txWhite}>Criar conta</Text>
          </Pressable>

          <Pressable style={styles.btnWhite} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txPurple}>Entrar</Text>
          </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}