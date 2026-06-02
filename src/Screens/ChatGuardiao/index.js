import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BottomNavGuardiao from '../../components/BottomNavGuardiao';


export default function ChatGuardiao() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    
                    {/* Cabeçalho: Botão Voltar + Título */}
                    <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Chat</Text>
                            <Text style={styles.subtitle}>Acompanhe e responda as usuárias em tempo real</Text>
                    </View>

                    {/* Card 1: Sara Santos */}
                    <Pressable 
                        style={styles.chatCard}
                        onPress={() => navigation.navigate('MensagensGuardiao', { usuario: 'Sara Santos' })}
                    >
                        <View style={styles.avatarPlaceholder}>
                            <Image 
                                source={require('../../../assets/imgHomeGuardiao/meuPerfil.png')} 
                                style={styles.avatarImage} 
                                tintColor="#CCCCCC"
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.userName}>Sara Santos</Text>
                            <Text style={styles.lastMessage} numberOfLines={1}>
                                Você vai vir me buscar hoje????
                            </Text>
                        </View>
                        <Text style={styles.statusText}>1min</Text>
                    </Pressable>

                    {/* Card 2: Karine Almeida */}
                    <Pressable 
                        style={styles.chatCard}
                        onPress={() => navigation.navigate('MensagensGuardiao', { usuario: 'Karine Almeida' })}
                    >
                        <View style={styles.avatarPlaceholder}>
                            <Image 
                                source={require('../../../assets/imgHomeGuardiao/meuPerfil.png')} 
                                style={styles.avatarImage} 
                                tintColor="#CCCCCC"
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.userName}>Karine Almeida</Text>
                            <Text style={styles.lastMessage} numberOfLines={1}>
                                Não quero ir sozinha :((
                            </Text>
                        </View>
                        <Text style={styles.statusText}>visto</Text>
                    </Pressable>

                    {/* Card 3: Luiza Karoline */}
                    <Pressable 
                        style={styles.chatCard}
                        onPress={() => navigation.navigate('MensagensGuardiao', { usuario: 'Luiza Karoline' })}
                    >
                        <View style={styles.avatarPlaceholder}>
                            <Image 
                                source={require('../../../assets/imgHomeGuardiao/meuPerfil.png')} 
                                style={styles.avatarImage} 
                                tintColor="#CCCCCC"
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.userName}>Luiza Karoline</Text>
                            <Text style={styles.lastMessage} numberOfLines={1}>
                                Cheguei na estação!
                            </Text>
                        </View>
                        <Text style={styles.statusText}>visto</Text>
                    </Pressable>

                    {/* Card 4: Emilly Farias */}
                    <Pressable 
                        style={styles.chatCard}
                        onPress={() => navigation.navigate('MensagensGuardiao', { usuario: 'Emilly Farias' })}
                    >
                        <View style={styles.avatarPlaceholder}>
                            <Image 
                                source={require('../../../assets/imgHomeGuardiao/meuPerfil.png')} 
                                style={styles.avatarImage} 
                                tintColor="#CCCCCC"
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.userName}>Emilly Farias</Text>
                            <Text style={styles.lastMessage} numberOfLines={1}>
                                Compartilhe minha Rota com...
                            </Text>
                        </View>
                        <Text style={styles.statusText}>1min</Text>
                    </Pressable>

                </View>
            </ScrollView>

      <BottomNavGuardiao abaAtivaInicial={1} />

            
        </SafeAreaView>
    );
}