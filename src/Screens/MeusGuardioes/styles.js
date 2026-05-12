import { StyleSheet } from "react-native";

export default StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      paddingTop: 60,
       paddingBottom: 100,
    },
  
    titulo: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#5A1BB3",
      textAlign: "center",
    },

    cabecalho: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8, 
    },
    
    tituloIcon: {
      width: 24,
      height: 24,
      tintColor: "#5A1BB3", 
    },
  
    subtitulo: {
      marginTop: 20,
      fontSize: 16,
      color: "#3e1774",
      textAlign: "center",
    },
  
    botao: {
      marginTop: 30,
      alignSelf: "center",
      backgroundColor: "#5A1BB3",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
    },
  
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "400",
    },

      // Navegação
navegacao: {
  position: 'absolute', // 👈 ESSENCIAL
  bottom: 0,            // 👈 COLA NO FINAL
  left: 0,
  width: '100%',
  height: 88,
  alignItems: 'center',
justifyContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderTopColor: '#ddd',
  paddingBottom: 3,
},

  line: {
    height: 4,
    backgroundColor: '#6925b8',
    borderRadius: 2,
    top: 0,
    left: 0,
    position: 'absolute',
  },

buttonNav: {
  flex: 1,
  height: 66,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
},

  textNav: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ccc'
  },


  });