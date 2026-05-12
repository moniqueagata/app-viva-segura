import { StatusBar } from 'expo-status-bar';
import {View ,Image,Text,Pressable,useWindowDimensions, Animated} from 'react-native';
import styles from'./styles';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
    const navigation = useNavigation();
     const { width } = useWindowDimensions();
    
        const [medidas, setMedidas] = useState({});
        const [abaAtiva, setAbaAtiva] = useState(2);
    
        const larguraAba = 60;
        const posicaoX = useRef(new Animated.Value(0)).current;
    
        useEffect(() => {
            const medidaAtual = medidas[abaAtiva];
    
            if (medidaAtual) {
                const { x, width } = medidaAtual;
    
                const destinoX = x + (width / 2) - (larguraAba / 2);
    
                Animated.spring(posicaoX, {
                    toValue: destinoX,
                    useNativeDriver: true,
                    bounciness: 4,
                }).start();
            }
        }, [abaAtiva, medidas]);
    
        const abaLayout = (index, event) => {
            const { x, width } = event.nativeEvent.layout;
            setMedidas(prev => ({
                ...prev, [index]: { x, width }
            }));
        };
    
        const abas = [
            {  rota: "Home", imagem: require('../../../assets/img/home.png'), index: 0 },
            {  rota: null,  imagem: require('../../../assets/img/map.png'), index: 1 },
            {rota: "MeusGuardioes", imagem: require('../../../assets/img/angel.png'), index: 2 },
            {  rota: "Perfil",  imagem: require('../../../assets/img/profile.png'), index: 3 }
        ];
  return (
    <View style={styles.container}>

<View style={styles.viewFlex}>
  <Image source={require('../../../assets/img/Home/iconi.jpeg')}  style={styles.iconiUsario}/>
<Text style={styles.ola}>Ola,</Text>
<Pressable onPress={() => navigation.navigate('Notificacoes')}>
<Image source={require('../../../assets/img/Home/i (2).jpeg')} style={styles.notificacao}  />
</Pressable>
</View>

 <Text style={styles.textoAjuda}>Precisando de ajuda? Use o SOS</Text>

      <Pressable style={styles.sos}>
         <Image source={require('../../../assets/img/Home/sos.jpeg')} style={styles.imagemSos} />
      
      </Pressable>

 <Text style={styles.textoEmergencia}>EMERGÊNCIA</Text>

<Text style={styles.textoSosPequeno}>Pressione o botão por 3 segundos para </Text>
<Text style={styles.textoSosPequeno2}>mandar sua geolocalização ao seu guardião</Text>
      
<Pressable style={styles.botao} onPress={() => navigation.navigate('MeusEnderecos')}>
   <Image source={require('../../../assets/img/Home/iconeBotao(1).jpeg')} style={styles.imagem} />
        <Text style={styles.texto}>Meus endereços</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('Telefones')}>
         <Image source={require('../../../assets/img/Home/iconeBotao(2).jpeg')} style={styles.imagem} />
        <Text style={styles.texto}>Telefones públicos</Text>
      </Pressable>

      <Pressable style={styles.botao}>
         <Image source={require('../../../assets/img/Home/iconeBotao(3).jpeg')} style={styles.imagem} />
        <Text style={styles.texto}>Pontos Seguros</Text>
      </Pressable>



        <View style={styles.fundoEmbaixo}>
              <Animated.View 
                      style={[styles.line, 
                          { width: larguraAba, transform: [{ translateX: posicaoX }]}
                      ]}
                  />
      
              {abas.map((aba) => (
                  <Pressable 
                      key={aba.index}
                      style={styles.buttonNav}
                      onPress={() => {
                          setAbaAtiva(aba.index);
                        
                          if (aba.rota) {
                            navigation.navigate(aba.rota);
                          }
                        }}               
                      onLayout={(event) => abaLayout(aba.index, event)}
                  >
                      <Image source={aba.imagem}
                          style={{ width: 30, height: 30}}
                          tintColor={abaAtiva === aba.index ? '#FF88A7' : '#FFF'}
                          resizeMode='contain'
                      />
                      <Text style={[styles.textNav, abaAtiva === aba.index && { color: '#FF88A7'}]}>{aba.label}</Text>
                  </Pressable>
              ))}
         
      </View>
      <StatusBar style="auto" />
    </View>
  );
}