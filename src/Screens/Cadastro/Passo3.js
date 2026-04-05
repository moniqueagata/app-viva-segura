import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, Image, Animated } from "react-native";
import { TextInput as PaperInput, Modal, Portal } from "react-native-paper";
import { useState, useRef, useEffect } from "react"
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles/styles_passo3";

export default function Passo3() {
    const navigation = useNavigation();
    const route = useRoute();
    const { nome, cpf, dataNasc, telefone, email } = route.params || {};
    const [checked, setChecked] = useState(false);
    const [modal, setModal] = useState(false);

    // Senha
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [confirmarSenha, setConfirmarSenha] = useState('');

    // Validação de senha
    const senhasIguais = senha === confirmarSenha && confirmarSenha.length > 0;
    const exibirErro = confirmarSenha.length > 0 && !senhasIguais
    const caracteres = senha.length >= 8;
    const maiusculaEMinuscula = /[A-Z]/.test(senha) && /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);

    // Verificação 
    const finalizarCadastro = async () => {
      try {
        setReactiveValue(0);

        const usuario = { nome, cpf, dataNasc, telefone, email, senha};
        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

        setTimeout(() => {
          setModal(true);
        }, 500);

      } catch (error) {
        console.error("Erro ao salvar cadastro:", error);
      }
    };

    // Barra de progresso
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const [reactiveValue, setReactiveValue] = useState(-1000);
    const steps = 4;

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: reactiveValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, [reactiveValue]);

    useEffect(() => {
      const passoAtual = (caracteres && maiusculaEMinuscula && numero && senhasIguais) ? 4 : 3;
      setReactiveValue(-width + (width * passoAtual) / steps);

    }, [caracteres, maiusculaEMinuscula, numero, senhasIguais, width]);

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={modal} dismissable={false} contentContainerStyle={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.circleCheck}>
              <Image source={require('../../../assets/img/check.png')}
                style={{ width: 90, height: 90 }}
                resizeMode='contain'
              />
            </View>
            <Text style={styles.tituloModal}>Cadastro concluído</Text>
            <Text style={styles.subtitulo}>Faça login para começar!</Text>
            <Pressable style={styles.buttonModal}
              onPress={() => { setModal(false); navigation.replace('Login'); }}
            >
              <Text style={styles.txWhite}>Continuar</Text>
            </Pressable>
          </View>
        </Modal>
      </Portal>
      <View style={styles.header}>
        <Pressable style={styles.btnExit} onPress={() => navigation.navigate('Passo1')}>
          <Image source={require('../../../assets/img/arrow_1.png')} 
            style={{ width: 25, height: 25 }}
            tintColor='#aaa'
            resizeMode='contain' 
          />
        </Pressable>
        <View style={styles.barra}
          onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
        >
          <Animated.View
            style={[
              styles.barraPurple, { transform:[{ translateX: animatedValue }]}
            ]}
          />
        </View>
      </View>

        <View style={styles.logo}>
          <Image source={require('../../../assets/img/logo.png')} 
            style={{ width: 130, height: 130 }} 
            resizeMode='contain'
          />
        </View>

        <Text style={styles.titulo}>Crie uma senha segura</Text>

        <View style={styles.inputsContainer}>
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
            secureTextEntry={mostrarSenha}
            right={
              <PaperInput.Icon
                onPress={() => setMostrarSenha(!mostrarSenha)} 
                icon={mostrarSenha ? 'eye' : 'eye-off'}
                color={mostrarSenha ? '#bbb' : '#6925b8'}
              />
            } 
          />

          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>Confirmar senha</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '95%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' }}}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={mostrarSenha}
            error={exibirErro}
          />
        </View>


        <View style={styles.validacoesContainer}>
          <Text style={styles.textValidar}>
            Mínimo de 8 caracteres {' '}
            <Text style={{ color: caracteres ? '#07d600' : '#f75e5e', fontWeight: '700'}}>
              {caracteres ? '✓' : '✕'}
            </Text>
          </Text>
          <Text style={styles.textValidar}>
            Incluir letras maiúsculas e minúsculas {' '}
            <Text style={{ color: maiusculaEMinuscula ? '#07d600' : '#f75e5e', fontWeight: '700'}}>
              {maiusculaEMinuscula ? '✓' : '✕'}
            </Text>
          </Text>
          <Text style={styles.textValidar}>
            Números ou caracteres especiais {' '}
            <Text style={{ color: numero ? '#07d600' : '#f75e5e', fontWeight: '700'}}>
              {numero ? '✓' : '✕'}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.btnPurple, (!caracteres || !maiusculaEMinuscula || !numero || !senhasIguais) && {opacity: 0.5}]}
            disabled={!caracteres || !maiusculaEMinuscula || !numero || !senhasIguais}
            onPress={finalizarCadastro}
          >
            <Text style={styles.txWhite}>Concluir</Text>
          </Pressable>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}