import { StatusBar } from 'expo-status-bar';
import {View ,Image, Text, Pressable, useWindowDimensions, Animated} from 'react-native';
import styles from'./styles';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null);
    
    // Buscar dados
    useEffect(() => {
        async function carregarDados() {
            const dados = await AsyncStorage.getItem("user");
            if (dados) {
                setUsuario(JSON.parse(dados));
            }
        }
        carregarDados();
    }, []);
    // --------

    // Animação na navegação
    const { width } = useWindowDimensions();
    const [medidas, setMedidas] = useState({});
    const [abaAtiva, setAbaAtiva] = useState(0);
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
        { label: 'Home', rota: "Home", imagem: require('../../../assets/img/home.png'), index: 0 },
        { label: 'Mapa', rota: null,  imagem: require('../../../assets/img/map.png'), index: 1 },
        { label: 'Guardião', rota: "MeusGuardioes", imagem: require('../../../assets/img/angel.png'), index: 2 },
        { label: 'Você', rota: "Perfil",  imagem: require('../../../assets/img/profile.png'), index: 3 }
    ];

    return (
    <View style={styles.container}>
        <View style={styles.header}>
           <View style={styles.userContent}>
             <View style={styles.upload}>
                {usuario?.foto ? (
                    <Image 
                        source={{ uri: usuario.foto }} 
                        style={{ width: 45, height: 45, borderRadius: 22.5 }} // Tamanho menor para o topo da Home
                    />
                ) : (
                    <Image 
                        source={require('../../../assets/img/icon.png')} 
                        style={{ width: 45, height: 45 }} 
                        resizeMode='contain' 
                    />
                )}
            </View>           
                <Text style={styles.text}>
                    Ola, {usuario?.nome ? usuario.nome.split(' ')[0] : ''}!
                </Text>
           </View>
            <Pressable onPress={() => navigation.navigate('Notificacoes')}>
                <Image source={require('../../../assets/img/sino.png')}
                    style={{ width: 22, height: 22 }} 
                    tintColor='#550FA4' 
                />
            </Pressable>
        </View>
        <View style={styles.content}>
            <Text style={styles.subtitulo}>Precisando de ajuda? Use o SOS</Text>
            <View style={styles.borda}>
                <Pressable style={styles.buttonSos}>
                    <Image source={require('../../../assets/img/sos.png')} style={{ width: '80%', height: '80%' }} />
                </Pressable>
            </View>

            <Text style={styles.titulo}>EMERGÊNCIA</Text>

            <Text style={styles.descricao}>Pressione o botão por 3 segundos para mandar sua geolocalização ao seu guardião</Text>
                
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('MeusEnderecos')}>
                    <Image source={require('../../../assets/img/endereco.png')} 
                        style={{ width: 28, height: 28 }}
                        tintColor='#550FA4' 
                    />
                        <Text style={styles.texto}>Meus endereços</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Telefones')}>
                    <Image source={require('../../../assets/img/tel.png')} 
                        style={{ width: 28, height: 28 }}
                        tintColor='#550FA4' 
                    />
                    <Text style={styles.texto}>Telefones públicos</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Image source={require('../../../assets/img/pontos.png')} 
                        style={{ width: 28, height: 28 }}
                        tintColor='#550FA4' 
                    />
                    <Text style={styles.texto}>Pontos Seguros</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.navegacao}>
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
                            style={{ width: 24, height: 24 }}
                            tintColor={abaAtiva === aba.index ? '#ff80aa' : '#fff'}
                            resizeMode='contain'
                        />
                        <Text style={[styles.textNav, abaAtiva === aba.index && { color: '#ff80aa'}]}>{aba.label}</Text>
                    </Pressable>
                ))}
            </View>
        <StatusBar style="auto" />
    </View>
    );
}