import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { TextInput as PaperInput, ActivityIndicator } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import api from "../../services/api";


export default function Login() {
    const navigation = useNavigation();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [loading, setLoading] = useState(false);

    // Validação de login
    const loginValido = cpf.length >= 11 && senha.length >= 8;
    
    const verificaLogin = async () => {
  setLoading(true);

  try {
    console.log("CPF enviado:", cpf.replace(/\D/g, ''));
console.log("Senha enviada:", senha.trim());
    const response = await api.post("/login", {
      cpf: cpf.replace(/\D/g, ''),
senha: senha.trim(),
    });
console.log("RESPOSTA:", response.data);
    const user = response.data.usuario_encontrado;

    if (response.data.senha_confere) {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      navigation.replace("Home");
    } else {
      alert("Senha incorreta");
    }

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("CPF ou senha incorretos.");
  } finally {
    setLoading(false);
  }

  };

  return (
<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.logo}>
          <Image source={require('../../../assets/img/logo.png')} style={{ width: 200, height: 200 }} />
        </View>

        <Text style={styles.titulo}>Bem vinda(o) de volta!</Text>

        <View style={styles.inputsContainer}>
          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>CPF</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '95%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={cpf}
            onChangeText={text => setCpf(text)}
            keyboardType='numeric'
            render={props =>( <TextInputMask {...props} type={'cpf'} />)}
          />

          <View style={styles.senhaContainer}>
            <PaperInput 
              label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>Senha</Text>}
              mode='outlined'
              style={{ backgroundColor: '#fff', height: 57, width: '95%' }}
              outlineColor='#ddd'        
              activeOutlineColor='#6925b8' 
              outlineStyle={{ borderRadius: 15 }}
              theme={{colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' }}}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
              right={
                <PaperInput.Icon
                  onPress={() => setMostrarSenha(!mostrarSenha)}  
                  icon={mostrarSenha ? 'eye' : 'eye-off'}
                  color={mostrarSenha ? '#bbb' : '#6925b8'}
                />
              } 
            />
            <Text style={styles.textEsqueciSenha}>Esqueceu a senha?</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.btnPurple, !loginValido && {opacity: 0.5}]}
            onPress={verificaLogin}
            disabled={!loginValido || loading}
          >
            {loading ? (
              <ActivityIndicator color='#fff'/>
            ):(
              <Text style={styles.txWhite}>Entrar</Text>
            )}
          </Pressable>
        </View>

        <View style={styles.linkView}>
            <Text style={styles.txLink}>Ainda não possui conta?</Text><Pressable onPress={() => navigation.navigate('Passo1')}><Text style={styles.link}>Criar conta</Text></Pressable>
        </View>

      <StatusBar style="auto" />
</ScrollView>
</KeyboardAvoidingView>
  );
}