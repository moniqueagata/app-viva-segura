import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Image, useWindowDimensions, Animated } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';


export default function MeusGuardioes() {
    const navigation = useNavigation();

    // Animação na navegação
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
            { label: 'Home', rota: "Home", imagem: require('../../../assets/img/home.png'), index: 0 },
            { label: 'Mapa', rota: "Mapa",  imagem: require('../../../assets/img/map.png'), index: 1 },
            { label: 'Guardião', rota: "MeusGuardioes", imagem: require('../../../assets/img/angel.png'), index: 2 },
            { label: 'Você', rota: "Perfil",  imagem: require('../../../assets/img/profile.png'), index: 3 }
        ];
        // --------

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Meus guardiões</Text>

            <Image
                source={require('../../../assets/img/angel.png')}
                style={styles.tituloIcon}
                resizeMode="contain"
            />
        </View>
        <View style={styles.content}>
            <Text style={styles.subtitulo}>
                Adicione os guardiões à sua lista
            </Text>

            <Pressable style={styles.botao} onPress={() => navigation.navigate("AddGuardiao")}>
                <Text style={styles.buttonText}>Novo Guardião +</Text>
            </Pressable>

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
                        style={{ width: 22, height: 22 }}
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