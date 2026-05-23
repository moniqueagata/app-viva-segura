import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function AddGuardiao() {
  const navigation = useNavigation();

  const [whats, setWhats] = useState(true);
  const [localizacao, setLocalizacao] = useState(true);

  return (
    <View style={styles.container}>


      <View style={styles.topo}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../../assets/img/arrow_2.png')}
          style={styles.seta}
        />
      </Pressable>
    </View>
    
      {/* TÍTULO COM ÍCONE */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Novo guardião</Text>
        <Image
          source={require('../../../../assets/img/angel.png')}
          style={styles.icon}
        />
      </View>

      {/* INPUTS */}
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder=""
        />

        <Text style={styles.label}>Telefone</Text>
        <View style={styles.telefoneContainer}>
          <Text style={styles.ddd}>+55</Text>
          <TextInput
            style={styles.inputTelefone}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* NOTIFICAÇÕES */}
      <View style={styles.notificacaoContainer}>
        <Text style={styles.notificacaoTitulo}>🔔 Notificações</Text>

        <View style={styles.linha}>
          <Text style={styles.textoNotificacao}>
            Receber alertas via Whatsapp/SMS
          </Text>
          <Switch
            value={whats}
            onValueChange={setWhats}
            trackColor={{ false: "#ccc", true: "#cbb4f6" }}
            thumbColor={whats ? "#6925b8" : "#fff"}
          />
        </View>

        <View style={styles.linha}>
          <Text style={styles.textoNotificacao}>
            Compartilhar localização em tempo real
          </Text>
          <Switch
            value={localizacao}
            onValueChange={setLocalizacao}
            trackColor={{ false: "#ccc", true: "#cbb4f6" }}
            thumbColor={localizacao ? "#6925b8" : "#fff"}
          />
        </View>
      </View>

      {/* BOTÃO */}
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Adicionar guardião</Text>
      </Pressable>

    </View>
  );
}