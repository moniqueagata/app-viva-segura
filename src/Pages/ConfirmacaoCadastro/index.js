import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from'./styles';


export default function ConfirmacaoCadastro() {
  return (
    <View style={styles.container}>
        <View style={styles.barraView}>
        <View style={styles.barraLoading}>
          <View style={styles.loadingPurple}></View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}