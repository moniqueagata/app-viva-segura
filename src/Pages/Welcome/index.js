import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, Modal } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  const [ modalStatus, setModalStatus ] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={require('../../../assets/img/logotipo.png')} style={styles.logo} />
      </View>

      <View style={styles.iconView}>
        <Image source={require('../../../assets/img/icone.png')} style={styles.icone} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.titulo}>Bem-Vinda</Text>
        <Text style={styles.subtitulo}>Mais segurança nos seus trajetos do dia a dia</Text>
      </View>

      <View style={styles.btnView}>
        <Pressable style={styles.btnPurple} onPress={() => setModalStatus(true)}>
        <Text style={styles.txWhite}>Criar conta</Text>
      </Pressable>

      <Pressable style={styles.btnWhite} onPress={() => setModalStatus(true)}>
        <Text style={styles.txPurple}>Entrar</Text>
      </Pressable>
      </View>

      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalStatus}
      >
        
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}