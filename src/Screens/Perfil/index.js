import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View, Text, Pressable, Animated, Easing, useWindowDimensions } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
    const navigation = useNavigation();

    // Animação na navegação
    const { width } = useWindowDimensions();

    const [medidas, setMedidas] = useState({});
    const [abaAtiva, setAbaAtiva] = useState(3);

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
    // --------

    //pegar dados da usuaria
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
  const carregarUsuario = async () => {
    const dados = await AsyncStorage.getItem("user");

    if (dados) {
      setUsuario(JSON.parse(dados));
    }
  };

  carregarUsuario();
}, []);

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.photoUpload}>
                        <View style={styles.upload}>
                            {/* Campo de upload da imagem */}
                        </View>           
                    </View>

                    <Text style={styles.nome}>
  {usuario?.nome || "Nome"}
</Text>

<Text style={styles.id}>
  ID: {usuario?.id_usuaria || usuario?.id || "----"}
</Text>

                    <Pressable style={styles.buttonEdit} onPress={() => navigation.navigate('EditarPerfil')}>
                        <Text style={styles.textWhite}>Editar perfil</Text>
                    </Pressable>
                </View>

                <View style={styles.settings}>

                    <Text style={styles.sessions}>Preferências</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Notificacoes')}>
                        <View style={styles.grid}>
                            <View style={styles.circle}>
                                <Image source={require('../../../assets/img/sino.png')}
                                    style={{ width: 23, height: 23 }}
                                    tintColor='#616161'  
                                    resizeMode='contain'
                                />
                            </View>
                            <Text style={styles.textButton}>Notificações</Text>
                        </View>
                        <Image source={require('../../../assets/img/arrow_2.png')}
                            style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                            tintColor='#aaa'  
                        />
                    </Pressable>

                    <Text style={styles.sessions}>Segurança</Text>
                    <View style={styles.gridButtons}>
                        
                        <Pressable style={styles.button}>
                            <View style={styles.grid}>
                                <View style={styles.circle}>
                                    <Image source={require('../../../assets/img/settings.png')}
                                        style={{ width: 23, height: 23 }}
                                        tintColor='#616161'  
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={styles.textButton}>Gerenciar guardiões</Text>
                            </View>
                            <Image source={require('../../../assets/img/arrow_2.png')}
                                style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                                tintColor='#aaa'  
                            />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <View style={styles.grid}>
                                <View style={styles.circle}>
                                    <Image source={require('../../../assets/img/pin.png')}
                                        style={{ width: 23, height: 23 }}
                                        tintColor='#616161'  
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={styles.textButton}>Compartilhar localização</Text>
                            </View>
                            <Pressable style={styles.toggle}>
                                <View style={styles.circleToggle}></View>
                            </Pressable>
                        </Pressable>
                    </View>

                    <Text style={styles.sessions}>Suporte</Text>
                    <View style={styles.gridButtons}>
                        <Pressable style={styles.button}>
                            <View style={styles.grid}>
                                <View style={styles.circle}>
                                    <Image source={require('../../../assets/img/password.png')}
                                        style={{ width: 23, height: 23 }}
                                        tintColor='#616161'  
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={styles.textButton}>Alterar senha</Text>
                            </View>
                            <Image source={require('../../../assets/img/arrow_2.png')}
                                style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                                tintColor='#aaa'  
                            />
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Central')}>
                            <View style={styles.grid}>
                                <View style={styles.circle}>
                                    <Image source={require('../../../assets/img/helpcenter.png')}
                                        style={{ width: 23, height: 23 }}
                                        tintColor='#616161'  
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={styles.textButton}>Central de ajuda</Text>
                            </View>
                            <Image source={require('../../../assets/img/arrow_2.png')}
                                style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                                tintColor='#aaa'  
                            />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <View style={styles.grid}>
                                <View style={styles.circle}>
                                    <Image source={require('../../../assets/img/terms.png')}
                                        style={{ width: 23, height: 23 }}
                                        tintColor='#616161'  
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={styles.textButton}>Termos</Text>
                            </View>
                            <Image source={require('../../../assets/img/arrow_2.png')}
                                style={{ width: 15, height: 15, transform: [{ scaleX: -1 }] }}
                                tintColor='#aaa'  
                            />
                        </Pressable>
                    </View>

                    <View style={styles.logout}>
                        <Pressable style={styles.buttonLogout}>
                            <Text style={styles.textRed}>Sair da conta</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ScrollView>

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
                    tintColor={abaAtiva === aba.index ? '#6925b8' : '#ddd'}
                    resizeMode='contain'
                />
                <Text style={[styles.textNav, abaAtiva === aba.index && { color: '#6925b8'}]}>{aba.label}</Text>
            </Pressable>
        ))}
        </View>
      <StatusBar style="auto" />
    </View>
  );
}