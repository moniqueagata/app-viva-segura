import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text, Pressable, SafeAreaView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

export default function Mensagens() {
    const navigation = useNavigation();
    const route = useRoute();

    const { Usuario } = route.params || { nomeUsuario: 'Usuário' };
    const origem = route.params?.origem;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            {/* Cabeçalho do Chat */}
            <View style={styles.header}>

                <Pressable onPress={() => {
                    navigation.navigate(origem);
                }}
                    style={styles.backButton}>
                    <Image source={require('../../../assets/img/arrow_2.png')}
                        style={{ width: 20, height: 20 }}
                        tintColor='#ccc'
                    />
                </Pressable>

                <View style={styles.avatarCircle}>
                    <Image
                        source={require('../../../assets/imgHomeGuardiao/meuPerfil.png')}
                        style={styles.avatarImage}
                        tintColor="#CCCCCC"
                    />
                </View>

                <Text style={styles.headerName}>{Usuario}</Text>
            </View>

            {/* Área das Mensagens (Estática) */}
            <ScrollView
                style={styles.chatArea}
                contentContainerStyle={styles.chatContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Mensagem Recebida (Lavanda/Roxa) */}
                <View style={[styles.bubble, styles.receivedBubble, { height: 90, width: '70%' }]}>
                    <View style={styles.bubbleTailLeft} />
                </View>

                <View style={[styles.bubble, styles.receivedBubble, { height: 110, width: '80%' }]}>
                    <View style={styles.bubbleTailLeft} />
                </View>

                {/* Mensagem Enviada (Verde Água) */}
                <View style={[styles.bubble, styles.sentBubble, { height: 100, width: '65%' }]}>
                    <View style={styles.bubbleTailRight} />
                </View>

                {/* Mensagem Recebida */}
                <View style={[styles.bubble, styles.receivedBubble, { height: 100, width: '75%' }]}>
                    <View style={styles.bubbleTailLeft} />
                </View>

                {/* Mensagem Enviada */}
                <View style={[styles.bubble, styles.sentBubble, { height: 100, width: '70%' }]}>
                    <View style={styles.bubbleTailRight} />
                </View>


                <View style={styles.typingBubble}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
            </ScrollView>


            <View style={styles.footer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="" // Deixado vazio conforme a imagem
                        placeholderTextColor="#A0A0A0"
                        multiline={false}
                    />
                    <Pressable style={styles.plusIconButton}>
                        <Text style={styles.plusIconText}>+</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.sendCircleButton}>
                    <Text style={styles.sendIconArrow}>↑</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}