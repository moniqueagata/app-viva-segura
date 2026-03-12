import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { TextInput } from 'react-native-web';

export default function Login() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        
        <Image source={require('../../../assets/img/isotipo1.png')} style={styles.isotipo} />

        <Text style={styles.titulo}>Login</Text>

        <View style={styles.inputView}>
            <Text style={styles.label}>CPF</Text>
            <TextInput style={styles.input} />
        
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} />
            <Text style={styles.desc}t>Esqueceu sua senha?</Text>
        </View>

        <Pressable style={styles.btnPurple}>
            <Text style={styles.txWhite}>Entrar</Text>
        </Pressable>

        <View style={styles.linkView}>
            <Text style={styles.txLink}>Ainda não possui uma conta?</Text><Pressable><Text style={styles.link}>Crie uma</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}