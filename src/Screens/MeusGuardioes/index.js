import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Image, useWindowDimensions, Animated } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';

import BottomNav from "../../components/BottomNav";



export default function MeusGuardioes() {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <View style={styles.header}>
          <Pressable style={styles.buttonHeader} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../assets/img/arrow_2.png')}
              style={{ width: 20, height: 20 }}
              tintColor='#6925b8'
            />
          </Pressable>
          <Text style={styles.tituloHeader}>Meus Guardiões</Text>
          <Image
            source={require('../../../assets/img/angel.png')}
            style={styles.tituloIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>        
            Compartilhe seu código de uso único para seus guardiões se conectarem a você.
          </Text>


        </View>


        <Pressable style={styles.botao} onPress={() => navigation.navigate("AddGuardiao")}>
          <Text style={styles.buttonText}>Novo Guardião +</Text>
        </Pressable>
      </View>

      <BottomNav abaAtivaInicial={2} />



      <StatusBar style="auto" />
    </View>


  );
}