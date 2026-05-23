import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight:'600',
    marginLeft: '19%',
    marginTop:40,
  },

  botaoAdicionar:{
    width:'40%',
    height: 40,
    backgroundColor:"#550FA4",
    borderRadius: 20,
    flexDirection:'row',
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  },

  botaoTexto:{
    fontSize: 16,
    fontWeight: 300,
    color:'#fff',
  },

  definaTexto:{
    fontSize:15,
    textAlign:'center',
    fontWeight:400,
    color:"#550FA4",
    marginTop:17,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    width:'90%',
    height:190,
    marginLeft:'5%',
    marginTop:30,
  },

  mapa: {
    width: '50%',
    marginLeft:10,
    height: 150,
    backgroundColor: "#000000",
    borderRadius:5,
    marginTop:20,
  },

  tituloCasa: {
    fontSize: 17,
    fontWeight: 700,
    color: "#6A0DAD",
    marginLeft:15,
    marginTop:25,
    width:'45%'
  },

  text: {
    fontSize: 15,
    color: "#888",
    marginTop: 5,
    marginLeft:15,
    position:'absolute',
    marginLeft:'57%',
    marginTop:'16%',
    width:'45%'
  },

  viewFlex:{
    flexDirection:'row', 
    justifyContent:'center',
  },

});