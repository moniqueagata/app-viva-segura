import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View , Image, TextInput} from 'react-native';
import styles from'./styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function CadastroUsuaria1() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.barraView}>
        <View style={styles.barraLoading}>
            <View style={styles.loadingPurple}></View>
        </View>
      </View>

      <View style={styles.viewText}>
        <Text style={styles.titulo}>Preencha as informações abaixo</Text>
      </View>

      <View style={styles.inputView}>
      <Text style={styles.textoInput}>Nome Completo</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setNome}
          value={nome}
        />

        <Text style={styles.textoInput}>CPF</Text>
        <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='000.000.000-00'
            maxLength={14}
            value={cpf}
            onChangeText={(text) => {
              let valor = text.replace(/\D/g, '');
              valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
              valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
              valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
              setCpf(valor);
            }}
        />

        <Text style={styles.textoInput}>Data de Nascimento</Text>
        <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='10/10/2010'
            maxLength={10}
            value={dataNasc} 
            onChangeText={(text) => {
            let valor = text.replace(/\D/g, '');
            valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
            valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
            setdataNasc(valor);
          }}
        />

        <View style={styles.telContainer}>
            <Text style={styles.textoInput}>Telefone</Text>
            <TextInput 
              style={styles.inputTel}
              keyboardType='number-pad'
              placeholder='(11) 99999-9999'
              value={telefone} 
              maxLength={15}
              onChangeText={(text) => {
                let valor = text.replace(/\D/g, '');
                valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
                valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
                setTelefone(valor);
              }}
            />
            <Text style={styles.ddTelefone}>55+</Text>
        </View>

        <Text style={styles.textoInput}>E-mail</Text>
        <TextInput 
          style={styles.input}
          keyboardType='emailAddress'
          placeholder='nome@email.com'
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <Pressable style={styles.botaoContinuar} onPress={() => {
        const cpfLimpo = cpf.replace(/\D/g, ''); 
        navigation.navigate('CadastroUsuaria2', { nome, cpf: cpfLimpo, dataNasc, telefone, email });
      }}>
        <Text style={styles.textoContinuar}>Continuar</Text>
      </Pressable>
        
        <View style={styles.linkView}>
        <Text style={styles.txLink}>Já possui uma Conta?</Text><Pressable onPress={() => navigation.navigate('LoadingLogin')}><Text style={styles.link}>Entrar</Text></Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}