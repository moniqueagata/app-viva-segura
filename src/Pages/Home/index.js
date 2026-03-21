import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vinda!</Text>
      <Text style={styles.subtitulo}>Você está logada no app 💜</Text>
    </View>
  );
}