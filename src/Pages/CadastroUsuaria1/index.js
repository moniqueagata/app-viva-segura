import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View ,Image, TextInput} from 'react-native';
import styles from'./styles';
import { useNavigation } from '@react-navigation/native';

export default function CadastroUsuaria1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.barraView}>
        <View style={styles.barraLoading}>
            <View style={styles.loadingPurple}></View>
        </View>
        </View>

      <Text style={styles.titulo}>Preencha as informações abaixo</Text>

      <View style={styles.inputView}>
      <Text style={styles.textoInput}>Nome Completo</Text>
        <TextInput 
            style={styles.input}
        />

        <Text style={styles.textoInput}>CPF</Text>
        <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='000.000.000-00'
        />

        <Text style={styles.textoInput}>Data de Nascimento</Text>
        <TextInput 
            style={styles.input}
            placeholder='10/10/10'
        />

        <View style={styles.telContainer}>
            <Text style={styles.textoInput}>Telefone</Text>
            <TextInput 
            style={styles.input}
            keyboardType='phone'
            />
            <Text style={styles.ddTelefone}>55+</Text>
        </View>

        <Text style={styles.textoInput}>E-mail</Text>
        <TextInput 
            style={styles.input}
            keyboardType='emailAddress'
            placeholder='nome@email.com'
        />
      </View>

      <Pressable style={styles.botaoContinuar} onPress={() => navigation.navigate('CadastroUsuaria2')}>
        <Text style={styles.textoContinuar}>Continuar</Text>
      </Pressable>
        
        <View style={styles.linkView}>
        <Text style={styles.txLink}>Já possui uma Conta?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.link}>Entrar</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}