import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    width: '100%',
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#6925b8',
    paddingHorizontal: 22,
    paddingTop: 20,
    gap: 36
  },

  tituloHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
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