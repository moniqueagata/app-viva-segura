import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Animated, Image} from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef, useEffect } from 'react';
import styles from'./styles/styles_passo2';

export default function Passo2() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    // Validação
    const formularioValido =
      nome.trim().length > 3 &&
      cpf.length === 14 &&
      dataNasc.length === 10 &&
      telefone.length >= 14 &&
      email.includes('@') && email.includes('.');

    // Barra de progresso
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const [reactiveValue, setReactiveValue] = useState(-1000);
    const step = 2;
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
    <View style={styles.container}>
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

        <View style={styles.texts}>
          <Text style={styles.titulo}>Vamos começar!</Text>
          <Text style={styles.subtitulo}>Preencha as informações que estão abaixo</Text>
        </View>

        <View style={styles.inputsContainer}>
          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>Nome</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '90%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={nome}
            onChangeText={setNome}
            autoCapitalize='words'
            maxLength={80}
          />

          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>CPF</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '90%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={cpf}
            onChangeText={text => setCpf(text)}
            keyboardType='numeric'
            render={props =>( <TextInputMask {...props} type={'cpf'} />)}
          />

          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>Data de nascimento</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '90%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={dataNasc}
            onChangeText={setDataNasc}
            keyboardType='numeric'
            render={props => ( <TextInputMask {...props} type={'datetime'} options={{format: 'DD/MM/YYYY'}} />)} 
          />

          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>Telefone</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '90%' }}
            left={<PaperInput.Affix text="+55" />}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={telefone}
            onChangeText={setTelefone}
            keyboardType='phone-pad'
            render={props => ( <TextInputMask {...props} type={'cel-phone'} options={{maskType: 'BRL', withDDD: true, dddMask: '(11) '}} />)}
          />

          <PaperInput
            label={<Text style={{ fontSize: 19, letterSpacing: 0.4 }}>E-mail</Text>}
            mode='outlined'
            style={{ backgroundColor: '#fff', height: 57, width: '90%' }}
            outlineColor='#ddd'        
            activeOutlineColor='#6925b8' 
            outlineStyle={{ borderRadius: 15 }}
            theme={{ colors: { primary: '#6925b8', onSurfaceVariant: '#ccc' } }} 
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            maxLength={100}
          />           
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.btnPurple, !formularioValido && {opacity: 0.5}]}
            onPress={() => {const cpfLimpo = cpf.replace(/\D/g, ''); 
              navigation.navigate('Passo3', {nome, cpf: cpfLimpo, dataNasc, telefone, email});
          }}>
            <Text style={styles.txWhite}>Continuar</Text>
          </Pressable>
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}