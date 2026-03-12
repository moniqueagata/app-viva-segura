import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, Modal } from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function Welcome() {

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
        <Text style={styles.titulo}>Sua segurança começa aqui</Text>
        <Text style={styles.subtitulo}>Compartilhe sua localização e viaje com mais segurança</Text>
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
        <View style={styles.modalContainer}>
          <View style={styles.navModal}>
            <Pressable onPress={() => setModalStatus(false) } >
              <Image source={require('../../../assets/img/exit2.png')} style={styles.iconExit} />
            </Pressable>
          </View>

          <Image source={require('../../../assets/img/isotipo2.png')} style={styles.isotipo} />

          <Text style={styles.subtituloModal}>Selecione seu perfil</Text>

          <View style={styles.btnModal}>

            <Text style={styles.txDesc}>Compartilho minha localização 👩</Text>
            <Pressable style={styles.btnPurple}>
              <Text style={styles.txWhite}>Protegida</Text>
            </Pressable>

            <Text style={styles.txDesc2}>Acompanho o trajeto 😇</Text>
            <Pressable style={styles.btnWhite}>
              <Text style={styles.txPurple}>Guardião</Text>
            </Pressable>
          </View>

        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}