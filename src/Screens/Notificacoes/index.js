import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, Pressable } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Notificacoes() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable style={styles.buttonHeader} onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../../../assets/img/arrow_2.png')} 
                style={{ width: 20, height: 20 }} 
                tintColor='#6925b8'
            />
            </Pressable>
            <Text style={styles.tituloHeader}>Notificações</Text>
        </View>
        <View style={styles.content}>

        <View style={styles.notificacaoCard}>
    <View style={styles.notificacaoIcon}>
        <Image 
            source={require('../../../assets/img/logo.png')}
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            resizeMode="cover"
        />
    </View>
    <View style={styles.notificacaoTextoWrapper}>
        <Text style={styles.notificacaoApp}>VivaSegura</Text>
        <Text style={styles.notificacaoTexto}>Viva com mais segurança, compartilhe sua rota 💜</Text>
    </View>
</View>

        </View>
      <StatusBar style="auto" />
    </View>
  );
}