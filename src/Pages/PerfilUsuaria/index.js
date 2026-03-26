import { StatusBar } from 'expo-status-bar';
import { Image, View, Pressable, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function PerfilUsuaria() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.viewUser}>
            <Text style={styles.titulo}>Meu Perfil</Text>

        <View style={styles.imageUser}></View>
            <Pressable style={styles.btnCamera}>
                <Image source={require('../../../assets/img/camera.png')} style={styles.iconCamera} />
            </Pressable>
        <View style={styles.viewText}>
            <Text style={styles.txNome}>Sara Santos</Text>
            <Text style={styles.descGuardiao}>2 Guardiões</Text>
        </View>
        </View>

       <View style={styles.viewBtn}>
           <Pressable style={styles.button}>
                <View style={styles.campo}>
                    <Image source={require('../../../assets/img/lapis.png')} style={styles.iconBtn}/>
                    <Text style={styles.txButtons}>Meus Dados</Text>
                </View>
                <Image source={require('../../../assets/img/exit1.png')} style={styles.icone}/>
            </Pressable>

            <Pressable style={styles.button}>
                <View style={styles.campo}>
                    <Image source={require('../../../assets/img/sino.png')} style={styles.iconBtn}/>
                    <Text style={styles.txButtons}>Notificações</Text>
                </View>
                <Image source={require('../../../assets/img/exit1.png')} style={styles.icone}/>
            </Pressable>

            <Pressable style={styles.button}>
                <View style={styles.campo}>
                    <Image source={require('../../../assets/img/chat.png')} style={styles.iconBtn}/>
                    <Text style={styles.txButtons}>Central de Ajuda</Text>
                </View>
                <Image source={require('../../../assets/img/exit1.png')} style={styles.icone}/>
            </Pressable>

            <Pressable style={styles.button}>
                <View style={styles.campo}>
                    <Image source={require('../../../assets/img/premium.png')} style={styles.iconBtn}/>
                    <Text style={styles.txButtons}>Versão Premium</Text>
                </View>
                <Image source={require('../../../assets/img/exit1.png')} style={styles.icone}/>
            </Pressable>

            <Pressable>
                <Text style={styles.txExit}>Excluir conta</Text>
            </Pressable>
       </View>

        <View style={styles.navbar}>
            <View style={styles.linha}></View>
            <Image source={require('../../../assets/img/home.png')} style={styles.iconNav}/>
            <Image source={require('../../../assets/img/mapa.png')} style={styles.iconNav}/>
            <Image source={require('../../../assets/img/guardiao_w.png')} style={styles.iconNav}/>
            <Image source={require('../../../assets/img/usuaria_p.png')} style={styles.iconNav}/>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}