import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { useState } from "react"
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function CadastroUsuaria2() {

    const navigation = useNavigation();
    const [senha, setSenha] = useState("");
    const tem8 = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const [checked, setChecked] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>
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
        {tem8 ? (
        <Text style={{ color: "green", fontWeight: "bold" }}> ✓ </Text>
        ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}> ✕ </Text>
        )}
      </View>
      <View style={styles.txVerificacao}>
        <Text style={styles.descSenha}>Incluir letras maiúsculas e minúsculas</Text>
        {temMaiuscula && temMinuscula ? (
        <Text style={{ color: "green", fontWeight: "bold" }}> ✓ </Text>
        ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}> ✕ </Text>
        )}
      </View>
      <View style={styles.txVerificacao}>
        <Text  style={styles.descSenha}>Números ou caracteres especiais</Text>
        {temNumero ? (
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

     <Pressable style={styles.botaoConcluir} onPress={() => navigation.navigate('ConfirmacaoCadastro')}>
        <Text style={styles.textoConcluir}>Concluir</Text>
      </Pressable>
       <View style={styles.linkView}>
        <Text style={styles.txLink}>Já possui uma Conta?<Pressable onPress={() => navigation.navigate('LoadingLogin')}><Text style={styles.link}>Entrar</Text></Pressable></Text>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}