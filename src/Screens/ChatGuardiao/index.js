import React, { useState, useRef } from "react";
import {
  View, Text, TextInput, Pressable, Image,
  FlatList, KeyboardAvoidingView, Platform
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";

const mensagensIniciais = [
  { id: '1', texto: 'Oi! Tudo bem com você?', meu: false },
  { id: '2', texto: 'Sim! Estou bem, obrigada por perguntar 😊', meu: true },
  { id: '3', texto: 'Qualquer coisa me chama, tô aqui!', meu: false },
];

export default function ChatGuardiao() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome } = route.params || { nome: 'Guardião' };
  const [mensagens, setMensagens] = useState(mensagensIniciais);
  const [texto, setTexto] = useState('');
  const flatListRef = useRef(null);

  const enviar = () => {
    if (!texto.trim()) return;
    setMensagens(prev => [...prev, { id: Date.now().toString(), texto, meu: true }]);
    setTexto('');
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
          <Image
            source={require('../../../assets/img/arrow_2.png')}
            style={{ width: 20, height: 20 }}
            tintColor='#333'
          />
        </Pressable>
        <View style={styles.avatar} />
        <Text style={styles.headerNome}>{nome}</Text>
        <Text style={styles.dots}>•••</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={mensagens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={[styles.bolha, item.meu ? styles.bolhaMinha : styles.bolhaDele]}>
            <Text style={[styles.textoBolha, item.meu && styles.textoBolhaMinha]}>
              {item.texto}
            </Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#aaa"
          onSubmitEditing={enviar}
        />
        <Pressable style={styles.btnEnviar} onPress={enviar}>
          <Text style={styles.setaEnviar}>↑</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}