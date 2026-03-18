import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoadingCadastro() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('CadastroPerfil');
        }, 2000);
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../../../assets/img/logotipo.png')} style={styles.logo} />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}