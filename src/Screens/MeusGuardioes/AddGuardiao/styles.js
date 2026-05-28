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
    width: 25,
    height: 25,
    tintColor: '#6925b8',
    marginTop: 20,
    },

  header: {
    alignItems: "center",
    marginTop: 50,
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
});