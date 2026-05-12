import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useState } from 'react';

  // Componente FAQ 
  const FaqCard =({ categoria, icone, perguntas }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={icone} style={{ width: 29, height: 29 }} tintColor='#6925b8'/>
        <Text style={styles.categoria}>{categoria}</Text>
      </View>
      <View style={styles.cardButtons}>
        {perguntas.map((p, index) => (
          <View key={index}>
            <Pressable style={styles.button}>
              <Text style={styles.textFaq}>{p.titulo}</Text>
              <Image source={require('../../../assets/img/arrow_2.png')} 
                style={{ width: 17, height: 17, transform: [{ rotate: '270deg' }] }}
                tintColor='#bbb'
              />
            </Pressable>
            {index < perguntas.length - 1 && <View style={styles.linha} />}
          </View>
        ))}
      </View>
    </View>
  );

export default function Central() {
    const navigation = useNavigation();

    // Lista de perguntas frequentes
    const listaFaq = [
      {
        categoria: 'Segurança',
        icone: require('../../../assets/img/protection.png'),
        perguntas: [
          { titulo: 'Quando devo usar o modo emergência?' },
          { titulo: 'O que acontece quando ativo o modo emergência?' },
          { titulo: 'Meus guardiões recebem minha localização o tempo todo?' }
        ]
      },
      {
        categoria: 'Guardiões',
        icone: require('../../../assets/img/angel.png'),
        perguntas: [
          { titulo: 'Como adicionar um guardião?' },
          { titulo: 'Quantos guardiões posso ter?' },
          { titulo: 'Posso remover um guardião?' }
        ]
      },
      {
        categoria: 'Localização',
        icone: require('../../../assets/img/map.png'),
        perguntas: [
          { titulo: 'Como funciona o compartilhamento de localização?' },
          { titulo: 'A localização funciona em segundo plano?' }
        ]
      },
      {
        categoria: 'Conta',
        icone: require('../../../assets/img/profile.png'),
        perguntas: [
          { titulo: 'Esqueci minha senha. O que fazer?' },
          { titulo: 'Como alterar meus dados?' },
          { titulo: 'Como excluir minha conta?' }
        ]
      },
    ];
    // -----

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.buttonArrow} onPress={() => navigation.navigate('Perfil')}>
          <Image source={require('../../../assets/img/arrow_2.png')} 
            style={{ width: 20, height: 20 }} 
            tintColor='#6925b8'
          />
        </Pressable>
        <Text style={styles.tituloHeader}>Central de Ajuda</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>Precisa de ajuda?</Text>
          </View>

          <View style={styles.searchInput}>
            <Image source={require('../../../assets/img/lupa.png')}
              style={{ width: 22, height: 22 }}
              tintColor='#aaa'
            />
            <TextInput
              style={styles.input}
              placeholder='Digite sua dúvida'
              placeholderTextColor='#808080'
              underlineColorAndroid='transparent' 
            />
          </View>

          <Pressable style={styles.chat} onPress={() => navigation.navigate('HelpChat')}>
            <Image source={require('../../../assets/img/chat.png')} 
              style={{ width: 28, height: 28 }}
              tintColor='#fff'
            />
            <Text style={styles.textChat}>Falar com suporte</Text>
          </Pressable>

          <View style={styles.session}>
            <Text style={styles.subtitulo}>Dúvidas frequentes</Text>

            {listaFaq.map((item, index) => (
              <FaqCard
                key={index}
                categoria={item.categoria}
                icone={item.icone}
                perguntas={item.perguntas}
              />
            ))}
          </View>

            
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}