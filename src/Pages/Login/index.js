import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        
        <Image source={require('../../../assets/img/isotipo1.png')} style={styles.isotipo} />

        <Text style={styles.titulo}>Bem-vinda de volta</Text>

        <View style={styles.inputView}>
            <Text style={styles.label}>CPF</Text>
            <TextInput 
              style={styles.inputCpf}
              keyboardType='numeric'
              placeholder='000.000.000-00'
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputSenha}
            />
            <Image source={require('../../../assets/img/vision.png')} style={styles.icone}/>
            </View>
            <Text style={styles.desc}>Esqueceu senha?</Text>
        </View>

        <Pressable style={styles.btnPurple}>
            <Text style={styles.txWhite}>Entrar</Text>
        </Pressable>

        <View style={styles.linkView}>
            <Text style={styles.txLink}>Ainda não possui conta?</Text><Pressable><Text style={styles.link}>Criar conta</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}