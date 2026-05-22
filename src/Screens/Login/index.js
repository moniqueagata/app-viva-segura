import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    const cpfLimpo = cpf.replace(/\D/g, '');
    const loginValido = cpfLimpo.length >= 11 && senha.length >= 8;
    
    const verificaLogin = async () => {
      setLoading(true);

      try {
        console.log("CPF enviado:", cpfLimpo);
        console.log("Senha enviada:", senha.trim());

            const response = await api.post("/login", {
              cpf: cpfLimpo,
              senha: senha.trim(),
            });

        console.log("RESPOSTA DO SERVIDOR:", response.data);
        const user = response.data.usuario_encontrado;

        if (user && response.data.senha_confere) {
          await AsyncStorage.setItem("user", JSON.stringify(user));
          navigation.replace("Home");
        } else if (!user) {
          alert("Usuária(o) não cadastrada(o).");
        } else {
          alert("Senha incorreta");
        }

      } catch (error) {
        console.log("Erro na requisição:", error.response?.data || error.message);
        alert("Não foi possível realizar o login. Verifique sua conexão.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
     <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor:'#fff' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logo}>
            <Image source={require('../../../assets/img/logo.png')} style={{ width: 150, height: 150 }} />
          </View>

          <Text style={styles.titulo}>Bem vinda(o) de volta!</Text>

            <View style={styles.inputsContainer}>
              <PaperInput
                label={<Text style={{ fontSize: 15, letterSpacing: 0.4 }}>CPF</Text>}
                mode='outlined'
                style={{ backgroundColor: '#fff', height: 50, width: '95%' }}
                outlineColor='#ddd'        
                activeOutlineColor='#6925b8' 
                outlineStyle={{ borderRadius: 15 }}
                theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
                value={cpf}
                onChangeText={text => setCpf(text)}
                keyboardType='numeric'
                disabled={loading}
                render={props =>( <TextInputMask {...props} type={'cpf'} />)}
              />

              <View style={styles.senhaContainer}>
                <PaperInput 
                  label={<Text style={{ fontSize: 15, letterSpacing: 0.4 }}>Senha</Text>}
                  mode='outlined'
                  style={{ backgroundColor: '#fff', height: 50, width: '95%' }}
                  outlineColor='#ddd'        
                  activeOutlineColor='#6925b8' 
                  outlineStyle={{ borderRadius: 15 }}
                  theme={{colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' }}}
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry={!mostrarSenha}
                  disabled={loading}
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
     </SafeAreaView>
  </View>
  );
}