import { StyleSheet } from "react-native";

export default StyleSheet.create({
      container: {
  flex: 1,
  backgroundColor: "#fff",
  paddingTop: 60,
},
  
content: {
  flex: 1,
},

 header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    gap: 15
  },

buttonHeader: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',

  },

  tituloHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: '#6925b8',

  },

    titulo: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#5A1BB3",
      textAlign: "center",
      marginTop: 10,
margin:10,
    },

    cabecalho: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8, 
    },
    
    tituloIcon: {
      width: 22,
      height: 22,
      tintColor: "#5A1BB3",
 
    },
  

  
    botao: {
      marginTop: 20,
      alignSelf: "center",
      backgroundColor: "#5A1BB3",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
    },
  
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
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