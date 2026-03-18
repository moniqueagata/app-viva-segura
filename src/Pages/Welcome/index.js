import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={require('../../../assets/img/logotipo.png')} style={styles.logo} />
      </View>

      <View style={styles.iconView}>
        <Image source={require('../../../assets/img/icone.png')} style={styles.icone} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.titulo}>Viva segura</Text>
        <Text style={styles.subtitulo}>Mais segurança nos trajetos do seu dia a dia</Text>
      </View>

      <View style={styles.btnView}>
        <Pressable style={styles.btnPurple} onPress={() => navigation.navigate('LoadingCadastro')}>
        <Text style={styles.txWhite}>Criar conta</Text>
      </Pressable>

      <Pressable style={styles.btnWhite} onPress={() => navigation.navigate('LoadingLogin')}>
        <Text style={styles.txPurple}>Entrar</Text>
      </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}