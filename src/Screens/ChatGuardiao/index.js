import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BottomNavGuardiao from '../../components/BottomNavGuardiao';

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ChatGuardiao() {
    const navigation = useNavigation();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            const user = await AsyncStorage.getItem("user");

            if (user) {
                const usuarioConvertido = JSON.parse(user);

                const idGuardiao = usuarioConvertido.id_usuaria;

                fetch(`http://192.168.0.60:8000/api/guardiao/home/${idGuardiao}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setUsuarios(json.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        };

        carregarUsuarios();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>

                    {/* Cabeçalho: Botão Voltar + Título */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Chat</Text>
                        <Text style={styles.subtitle}>Clique no card para conversar com a sua usuária protegida! </Text>
                    </View>


                    {usuarios.map((item) => (
                        <Pressable
                            key={item.id}
                            style={styles.chatCard}
                            onPress={() =>
                                navigation.navigate("Mensagens", {
                                    origem: "ChatGuardiao",
                                    Usuario: item.usuaria.nome,
                                    idDestinatario: item.usuaria.id_usuaria,
                                })
                            }
                        >
                            <View style={styles.avatarPlaceholder}>
                                <Image
                                    source={
                                        item.usuaria?.foto
                                            ? { uri: item.usuaria.foto }
                                            : require("../../../assets/imgHomeGuardiao/meuPerfil.png")
                                    }
                                    style={styles.avatarImage}
                                />
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.userName}>
                                    {item.usuaria.nome}
                                </Text>

                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Conversar com {item.usuaria.nome}

                                </Text>
                            </View>

                            <Text style={styles.statusText}>Chat</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>

            <BottomNavGuardiao abaAtivaInicial={1} />


        </SafeAreaView>
    );
}