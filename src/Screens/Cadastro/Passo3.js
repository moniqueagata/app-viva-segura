import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, Image, Animated, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView } from "react-native";
import { TextInput as PaperInput, Modal, Portal } from "react-native-paper";
import { useState, useRef, useEffect } from "react"
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "./styles/styles_passo3";
import api from "../../services/api";

export default function Passo3() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { 
      nome, 
      cpf, 
      dataNasc, 
      telefone, 
      email,
      perfilSelecionado
    } = route.params || {};

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

    const formatarData = (data) => {
      const [dia, mes, ano] = data.split('/');
      return `${ano}-${mes}-${dia}`;
    };

    const avancar = () => {
      navigation.navigate('Passo4', {
        nome,
        cpf,
        dataNasc,
        telefone,
        email,
        perfilSelecionado,
        senha
      });
    };

    // Barra de progresso
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const [reactiveValue, setReactiveValue] = useState(-1000);
    const step = 3;
    const steps = 4;

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: reactiveValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, [reactiveValue]);

    useEffect(() => {
      setReactiveValue(-width + (width * step) / steps);
    }, [step, width]);

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
        >
          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate('Passo2')}>
              <Image source={require('../../../assets/img/arrow_2.png')} 
                style={{ width: 20, height: 20 }}
                tintColor='#ccc'
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
          <View style={styles.content}>
            <View style={styles.logo}>
              <Image source={require('../../../assets/img/logo.png')} 
                style={{ width: 130, height: 130 }} 
                resizeMode='contain'
              />
            </View>

            <Text style={styles.titulo}>Crie uma senha segura</Text>

            <View style={styles.inputsContainer}>
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
                label={<Text style={{ fontSize: 15, letterSpacing: 0.4 }}>Confirmar senha</Text>}
                mode='outlined'
                style={{ backgroundColor: '#fff', height: 50, width: '95%' }}
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
                <Text style={{ color: caracteres ? '#91cf8e' : '#e49393', fontWeight: '500'}}>
                  {caracteres ? '✓' : '✕'}
                </Text>
              </Text>
              <Text style={styles.textValidar}>
                Incluir letras maiúsculas e minúsculas {' '}
                <Text style={{ color: maiusculaEMinuscula ? '#91cf8e' : '#e49393', fontWeight: '500'}}>
                  {maiusculaEMinuscula ? '✓' : '✕'}
                </Text>
              </Text>
              <Text style={styles.textValidar}>
                Números ou caracteres especiais {' '}
                <Text style={{ color: numero ? '#91cf8e' : '#e49393', fontWeight: '500'}}>
                  {numero ? '✓' : '✕'}
                </Text>
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable style={[styles.btnPurple, (!caracteres || !maiusculaEMinuscula || !numero || !senhasIguais) && {opacity: 0.5}]}
                disabled={!caracteres || !maiusculaEMinuscula || !numero || !senhasIguais}
                onPress={avancar}
              >
                <Text style={styles.txWhite}>Continuar</Text>
              </Pressable>
            </View>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </KeyboardAvoidingView>
     </SafeAreaView>
  </View>
  );
}