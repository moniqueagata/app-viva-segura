import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../../../assets/img/logo.png')} style={{width: 240, height: 240}} />
        </View>
            <ActivityIndicator size="large" color="#550fa4" style={styles.loading} />
      <StatusBar style="auto" />
    </View>
  );
}