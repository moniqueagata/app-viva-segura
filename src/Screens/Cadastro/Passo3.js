import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { useState } from "react"
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "./styles/styles_passo3";

export default function Passo3() {
    const navigation = useNavigation();

    // Senha
    const [senha, setSenha] = useState("");
    const quantidade = senha.length >= 8;
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [checked, setChecked] = useState(false);

    const route = useRoute();
    const { nome, cpf, dataNasc, telefone, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>
      </View>

      <View style={styles.viewLogo}>
        <Image source={require('../../../assets/img/isotipo1.png')} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>Crie uma senha segura</Text>

      <View style={styles.container2}>
    <View style={styles.inputContainer}>
      <View style={styles.inputView}>
    <View style={styles.cadeadoSenha}>
      <Image
        source={require('../../../assets/img/block.png')}
        style={styles.cadeado}
      />
      <Text style={styles.textoSenha}>Senha</Text>
    </View>
      <TextInput 
        style={styles.input}
        secureTextEntry={!mostrarSenha}
        onChangeText={setSenha}
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
    </View>
    </View>

    <View style={styles.viewVerificacao}>
      <View style={styles.txVerificacao}>
        <Text style={styles.descSenha}>Mínimo de 8 caracteres</Text>
        {quantidade ? (
        <Text style={{ color: "green", fontWeight: "bold" }}> ✓ </Text>
        ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}> ✕ </Text>
        )}
      </View>
      <View style={styles.txVerificacao}>
        <Text style={styles.descSenha}>Incluir letras maiúsculas e minúsculas</Text>
        {maiuscula && minuscula ? (
        <Text style={{ color: "green", fontWeight: "bold" }}> ✓ </Text>
        ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}> ✕ </Text>
        )}
      </View>
      <View style={styles.txVerificacao}>
        <Text  style={styles.descSenha}>Números ou caracteres especiais</Text>
        {numero ? (
        <Text style={{ color: "green", fontWeight: "bold" }}> ✓ </Text>
        ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}> ✕ </Text>
        )}
      </View>
    </View>
      
    <View style={styles.inputContainer}>
      <View style={styles.inputView}>
        <Text style={styles.textoInput}>Confirmar senha</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable style={styles.botaoOlho} onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Image source={ 
            mostrarSenha
              ? require('../../../assets/img/vision-off.png')
              : require('../../../assets/img/vision.png')
          } 
        style={styles.icone}/>
        </Pressable>
    </View>

        <View style={styles.viewTermos}>
          <Pressable style={styles.boxContainer} onPress={() => setChecked(!checked)}>
            <View style={[styles.checkbox, checked && styles.boxChecked]}>
              {checked && <Image source={require('../../../assets/img/icon_check.png')} style={styles.iconeChecked}/>}
            </View>
          </Pressable>
        <Text style={styles.textPurple}>Concordo com os</Text><Text style={styles.textPink}>Termos</Text><Text style={styles.textPurple}>e a</Text><Text style={styles.textPink}>Politica de Privacidade</Text>
        </View>
      </View>
      </View>

      <Pressable style={styles.botaoConcluir} onPress={() => {
        if(senha.length < 8) {
          alert("A senha deve ter pelo menos 8 caracteres");
          return;
        }
        navigation.navigate('Confirmacao', { nome, cpf, dataNasc, telefone, email, senha })
      }}>
        <Text style={styles.textoConcluir}>Concluir</Text>
      </Pressable>
       <View style={styles.linkView}>
        <Text style={styles.txLink}>Já possui uma Conta?<Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.link}>Entrar</Text></Pressable></Text>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}