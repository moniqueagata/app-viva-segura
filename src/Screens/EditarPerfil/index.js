import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, TextInput } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export default function EditarPerfil() {
  const navigation = useNavigation();

  //const [focus, setFocus] = useState(false);

  //atualizar dados
const [usuario, setUsuario] = useState({});

useEffect(() => {
  async function carregarUsuario() {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      setUsuario(JSON.parse(user));
    }
  }

  carregarUsuario();
}, []);

const salvar = async () => {
  try {
    const user = await AsyncStorage.getItem("user");

    if (!user) {
      alert("Usuário não encontrado");
      return;
    }

    const dados = JSON.parse(user);

    const response = await api.put(`/usuaria/${dados.id_usuaria}`, {
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone
    });

    await AsyncStorage.setItem(
      "user",
      JSON.stringify(response.data.data)
    );

    alert("Atualizado com sucesso!");

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Erro ao atualizar");
  }
};

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable style={styles.buttonHeader} onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../../../assets/img/arrow_2.png')} 
                style={{ width: 20, height: 20 }} 
                tintColor='#6925b8'
            />
            </Pressable>
            <Text style={styles.tituloHeader}>Editar perfil</Text>
        </View>

        <View style={styles.content}>

          <View style={styles.photoUpload}>
            <View style={styles.upload}>
              {/* Campo de upload da imagem */}
            </View>
            <Pressable style={styles.edit}>
                <Image source={require('../../../assets/img/pen.png')}
                  style={{ width: 23, height: 23 }}
                  tintColor='#fff'
                  resizeMode='cover'
                />
            </Pressable>                  
          </View>

          <View style={styles.gridInputs}>
            
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputContainer}>
              <TextInput
  style={styles.input}
  value={usuario.nome || ""}
  onChangeText={(text) => setUsuario({ ...usuario, nome: text })}
/>
            </View>


            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
  style={styles.input}
  value={usuario.email || ""}
  onChangeText={(text) => setUsuario({ ...usuario, email: text })}
/>
              <Image source={require('../../../assets/img/email_outline.png')}
                style={{ width: 23, height: 23, marginLeft: 11 }}
                tintColor='#bbb'
                resizeMode='cover'
              />
            </View>

            <Text style={styles.label}>Telefone</Text>
            <View style={styles.inputContainer}>
             <TextInput
  style={styles.input}
  value={usuario.email || ""}
  onChangeText={(text) => setUsuario({ ...usuario, email: text })}
/>
              <Image source={require('../../../assets/img/phone_outline.png')}
                style={{ width: 23, height: 23 }}
                tintColor='#bbb'
                resizeMode='cover'
              />
            </View>
          </View>

          <Pressable style={styles.buttonPurple}  onPress={salvar}>
            <Text style={styles.textWhite}>Salvar alterações</Text>
          </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}