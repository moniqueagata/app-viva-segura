import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "space-between",
  },

  topo: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    },

    seta: {
    width: 20,
    height: 20,
    tintColor: '#6925b8',
    marginTop: 15,
    },

  header: {
    alignItems: "center",
    marginTop: 40,
    gap: 6,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6925b8",
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: "#6925b8",
  },

  inputsContainer: {
    marginTop: 30,
    gap: 15,
  },

  label: {
    fontSize: 16,
    color: "#6925b8",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#eaeaea",
    borderRadius: 25,
    height: 45,
    paddingHorizontal: 15,
  },

  telefoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    borderRadius: 25,
    height: 45,
    paddingHorizontal: 15,
  },

  ddd: {
    color: "#999",
    marginRight: 10,
  },

  inputTelefone: {
    flex: 1,
  },

  notificacaoContainer: {
    marginTop: 30,
    gap: 15,
  },

  notificacaoTitulo: {
    color: "#6925b8",
    fontWeight: "bold",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textoNotificacao: {
    flex: 1,
    color: "#555",
    fontSize: 13,
  },

  botao: {
    backgroundColor: "#6925b8",
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },


modal: {
    width: '100%',
  height: 500,
  backgroundColor: '#fff',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  position: 'absolute',
  bottom: 0,
  margin: 0,
  alignSelf:'center',
  justifyContent:'center',
  
},

circleCheck: {
  width: 150,
  height: 150,
  backgroundColor: '#8e3deb',
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 25,
    alignSelf:'center',
},

tituloModal: {
  fontSize: 30,
  fontWeight: '500',
  color: '#515151',
  letterSpacing: 0.5,
  marginBottom: 11,
    alignSelf:'center',
},

subtitulo: {
  fontSize: 18,
  fontWeight: '400',
  color: '#717171',
  marginBottom: 60,
    alignSelf:'center',
},

buttonModal: {
  backgroundColor: '#6925b8',
  width: '70%',
  height: 54,
  borderRadius: 35,
  justifyContent: 'center',
  alignItems: 'center',
    alignSelf:'center',
},

txWhite: {
  color: '#fff',
  fontSize: 22,
  fontWeight: '500',
},




});