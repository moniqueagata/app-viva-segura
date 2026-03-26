import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const verificaLogin = async () => {
      setLoading(true);

      try {
        const dados = await AsyncStorage.getItem('usuario');

        if (!dados) {
          alert('Nenhum perfil cadastrado');
          setLoading(false);
          return;
        }

        const usuario = JSON.parse(dados);
        const cpfDigitadoLimpo = cpf.replace(/\D/g, '');
        const cpfSalvoLimpo = usuario.cpf.replace(/\D/g, '');

        if (cpfDigitadoLimpo === cpfSalvoLimpo && senha === usuario.senha) {
          navigation.replace('Home');
        } else {
          alert('CPF ou senha estão incorretos');
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao processar login');
        setLoading(false);
      }
    };

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/img/isotipo1.png')} style={styles.isotipo} />

        <Text style={styles.titulo}>Bem vinda(o) de volta!</Text>

        <View style={styles.container2}>
          <View style={styles.inputView}>
              <Text style={styles.label}>CPF</Text>
              <TextInput 
                style={styles.inputCpf}
                keyboardType='numeric'
                placeholder='000.000.000-00'
                value={cpf}
                maxLength={14}
                onChangeText={(text) => {
                  let valor = text.replace(/\D/g, '');
                  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                  setCpf(valor);
                }}
              />
        </View>
        <View style={styles.inputView}>
          <View style={styles.cadeadoSenha}>
            <Image
              source={require('../../../assets/img/block.png')}
              style={styles.cadeado}
            />
            <Text style={styles.textoSenha}>Senha</Text>
          </View>
              <TextInput 
              style={styles.inputSenha}
              onChangeText={setSenha}
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

        <Pressable style={styles.btnPurple} onPress={verificaLogin}>
            <Text style={styles.txWhite}>{loading ? 'Entrando...': 'Entrar'}</Text>
        </Pressable>

        <View style={styles.linkView}>
            <Text style={styles.txLink}>Ainda não possui conta?</Text><Pressable onPress={() => navigation.navigate('LoadingCadastro')}><Text style={styles.link}>Criar conta</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}