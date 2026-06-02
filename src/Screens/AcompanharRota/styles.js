import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    map: {
        flex: 1,
    },

    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        minHeight: 350,

    },

    fotoContainer: {
        position: "absolute",
        top: -45,
        left: 0,
        right: 0,
        alignItems: "center",
    },

    fotoCard: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#6c27a8",
        backgroundColor: "#FFF",
    },

    nome: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6c27a8",
        textAlign: "center",
        marginTop: 45,
    },

    texto: {
        fontSize: 18,
        marginTop: 15,
    },

    distanciaBox: {
        flexDirection: "row",
        textAlign: "center",
        marginTop: 10,
    },

    bolinhaVerde: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#56CDA6",
        marginRight: 8,
        marginTop: 4,

    },

    distanciaTexto: {
        color: "#6F6F6F",
        fontSize: 15,
        fontWeight: "600",
    },

    cidade: {
        marginTop: 10,
        color: "#777",
        fontSize: 16,
    },

    markerImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#FFF",
    },

    botaoAbrir: {
        backgroundColor: "#6c27a8",
        paddingVertical: 14,
        borderRadius: 18,
        alignItems: "center",
        marginTop: 40,
        width: "100%",
    },

    textoBotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },


    overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
},

    bottomSheet: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,

  backgroundColor: "#ffffff",
  maxHeight: "85%",

  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,

  padding: 20,
  paddingBottom: 30,
},
    linha: {
        width: 60,
        height: 6,
        backgroundColor: "#c2c2c2",
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 20,
    },

    rowTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    nomeModal: {
        color: "#6c27a8",
        fontSize: 24,
        fontWeight: "bold",
    },

    status: {
        color: "#56CDA6",
        fontSize: 15,
        marginTop: 4,
        fontWeight: "600",
    },

    badge: {
        backgroundColor: "#6c27a8",
        width: 58,
        height: 58,
        borderRadius: 29,
        justifyContent: "center",
        alignItems: "center",
    },

    badgeText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    linhaInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
    },

    labelInline: {
        color: "#e4e4e4",
        fontSize: 15,
    },

    valorInline: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },

    divisor: {
        height: 1,
        backgroundColor: "#2A2A2A",
        marginVertical: 10,
    },

    botaoCompartilhar: {
        backgroundColor: "#d32a27",
        paddingVertical: 16,
        borderRadius: 18,
        alignItems: "center",
        marginTop: 12,
    },

    botaoText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    endereco: {
        color: "#303030",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 4,
    },

    bairro: {
        color: "#707070",
        fontSize: 15,
        marginBottom: 22,
    },

    cardMini: {
        backgroundColor: "#ededed",
        borderRadius: 22,
        padding: 18,
    },

    infoLinha: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
    },

    bateriaContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    bateriaIcone: {
        width: 28,
        height: 14,
        borderWidth: 1.5,
        borderColor: "#fff",
        borderRadius: 4,
        marginRight: 20,
        padding: 2,
    },

    bateriaNivel: {
        height: "100%",
        backgroundColor: "#56CDA6",
        borderRadius: 2,

    },

    valorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 90,
    justifyContent: "flex-end",
},

    label: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",

    },

    valor: {
        color: "#2d2d2d",
        fontSize: 15,
        fontWeight: "500",
    },

    cardMapa: {
  marginTop: 16,
  marginHorizontal: 16,
  backgroundColor: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  elevation: 4,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
},

mapMini: {
  width: "100%",
  height: 180,
},

mapaInfo: {
  padding: 12,
  gap: 4,
},

endereco2: {
  fontSize: 14,
  fontWeight: "600",
  color: "#222",
},

bairro2: {
  fontSize: 12,
  color: "#777",
},

distanciaMapa: {
  marginTop: 6,
  fontSize: 13,
  color: "#6925b8",
  fontWeight: "600",
},



});