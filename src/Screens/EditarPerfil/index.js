import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import * as ImagePicker from "expo-image-picker";


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

  useEffect(() => {
  if (usuario?.foto) {
    setFoto(usuario.foto);
  }
}, [usuario]);

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
        telefone: usuario.telefone,
        foto: foto
      });

      await AsyncStorage.setItem(
        "user",
        JSON.stringify(response.data.data)
      );

      Alert.alert(
      "Sucesso",
      "Atualizado com sucesso!",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack()
        }
      ]
    );

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Erro ao atualizar");
  }
};

const [foto, setFoto] = useState(usuario?.foto || null);

const escolherFoto = async () => {
  const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissao.status !== "granted") {
    alert("Permissão negada");
    return;
  }

  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.1,
base64: false,
  });

  if (!resultado.canceled) {
  setFoto(resultado.assets[0].uri);
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
  
  <Pressable style={styles.upload} onPress={escolherFoto}>
    <Image
      source={
        foto
          ? { uri: foto }
          : require("../../../assets/imgHomeGuardiao/perfil.png")
      }
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 999,
      }}
      resizeMode="cover"
    />
  </Pressable>

  <Pressable style={styles.edit} onPress={escolherFoto}>
    <Image
      source={require('../../../assets/img/pen.png')}
      style={{ width: 23, height: 23 }}
      tintColor='#fff'
      resizeMode='contain'
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
              style={{ width: 23, height: 23, marginRight:40 }}
              tintColor='#bbb'
              resizeMode='cover'
            />
          </View>

          <Text style={styles.label}>Telefone</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={usuario.telefone || ""}
              onChangeText={(text) => setUsuario({ ...usuario, telefone: text })}
            />
            <Image source={require('../../../assets/img/phone_outline.png')}
              style={{ width: 23, height: 23, marginRight:40  }}
              tintColor='#bbb'
              resizeMode='cover'
            />
          </View>
        </View>

        <Pressable style={styles.buttonPurple} onPress={salvar}>
          <Text style={styles.textWhite}>Salvar alterações</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}