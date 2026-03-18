import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function CadastroPerfil() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>
      </View>

          <Text style={styles.titulo}>Escolha seu perfil</Text>

        <View style={styles.viewCard}>

          <Text style={styles.subtitulo}>Selecione o seu papel no aplicativo</Text>

            <Pressable style={styles.card} onPress={() => navigation.navigate('CadastroUsuaria1')}>
              <Image source={require('../../../assets/img/usuaria.png')} style={styles.icone} />
              <View style={styles.viewDesc}>
                <Text style={styles.tituloCard}>Sou Usuária</Text>
                <Text style={styles.desc}>Compartilhe sua localização com pessoas de confiança</Text>
              </View>
            </Pressable>

            <Pressable style={styles.card}>
                <Image source={require('../../../assets/img/guardiao.png')} style={styles.icone} />
              <View style={styles.viewDesc}>
                <Text style={styles.tituloCard}>Sou Guardião</Text>
                <Text style={styles.desc}>Acompanhe trajetos e receba alertas</Text>
              </View>
            </Pressable>
            
        </View>

          <View style={styles.linkView}>
            <Text style={styles.txLink}>Já possui uma Conta?</Text><Pressable onPress={() => navigation.navigate('LoadingLogin')}><Text style={styles.link}>Entrar</Text></Pressable>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}