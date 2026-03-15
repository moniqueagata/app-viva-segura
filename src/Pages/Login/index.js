import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';

export default function Login() {
    const navigation = useNavigation();
    const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate('Welcome')}><Image source={require('../../../assets/img/seta.png')} style={styles.exitIcon} /></Pressable>
      </View> 
        <Image source={require('../../../assets/img/isotipo1.png')} style={styles.isotipo} />

        <Text style={styles.titulo}>Login</Text>

        <View style={styles.container2}>
          <View style={styles.inputView}>
              <Text style={styles.label}>CPF</Text>
              <TextInput 
                style={styles.inputCpf}
                keyboardType='numeric'
                placeholder='000.000.000-00'
              />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Senha</Text>
              <TextInput 
              style={styles.inputSenha}
              secureTextEntry={!mostrarSenha}
            />
            <Pressable style={styles.botaoOlho} onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Image 
                source={ 
                  mostrarSenha
                    ? require('../../../assets/img/vision-off.png')
                    : require('../../../assets/img/vision.png')
                } 
                style={styles.icone}/>
            </Pressable>
            <Text style={styles.desc}>Esqueceu senha?</Text>
        </View>
        </View>

        <Pressable style={styles.btnPurple}>
            <Text style={styles.txWhite}>Entrar</Text>
        </Pressable>

        <View style={styles.linkView}>
            <Text style={styles.txLink}>Ainda não possui conta?</Text><Pressable onPress={() => navigation.navigate('CadastroPerfil')}><Text style={styles.link}>Criar conta</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}