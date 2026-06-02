import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  fundoEncima: {
    backgroundColor: "#550FA4",
    height: '12%',
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    height: 20,
    width: 20,
    marginLeft: 20,
     marginTop:'55%',
  },

  titulo: {
    color: "#fff",
    fontSize: 22,
    fontWeight:'600',
 marginLeft: '15%',
 marginTop:'7%',
  },

  card: {
    backgroundColor: "#FAFAFA",
    marginHorizontal: 15,
    marginTop: 18,
    padding: 20,
    borderRadius: 15,
  },

 tituloCard: {
    color: "#653F8F",
    fontSize: 17,
    marginBottom: 10,
  },

telefone: {
    color: "#9e9e9e",
    fontSize: 15,
     marginLeft: 5,
  },
  viewNumero:{
    flexDirection: 'row',
  },
  imagemTelefone:{
       height: 17,
       marginLeft: 4,
    width: 17,
    
  },
    imagemTelefoneW:{
       height: 19,
       marginLeft: 4,
    width: 19,
    
  }
});