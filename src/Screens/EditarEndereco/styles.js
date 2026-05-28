import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#ffffff'
  },
  fundoEncima: {
    backgroundColor: "#550FA4",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    height: 20,
    width: 20,
    marginLeft: 40,
    marginTop:20,
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight:'600',
 marginLeft: '15%',
     marginTop:20,
  },
  pressableAlteracoes:{
    backgroundColor: "#4E1396",
    height:45,
    width:'85%',
    borderRadius:10,
    marginLeft:'7.5%',
    marginTop:20,
  },
  textAlteracoes:{
    textAlign:'center',
    fontSize:17,
    color:'#E0D8EA',
    fontWeight:500,
   marginTop:'3%'
  },
  excliirAlteracoes:{
    backgroundColor: "#FFF",
    marginTop:10,
    borderWidth:2,
    borderColor:"#4E1396",
    height:45,
    width:'85%',
    borderRadius:10,
    marginLeft:'7.5%',
    marginBottom:10,
  },
  textExcluir:{
    textAlign:'center',
    fontSize:17,
    color:'#4E1396',
    fontWeight:500,
   marginTop:'2%'
  },
  textInputComplemento:{
    backgroundColor: "#FFF",
    marginTop:10,
    borderWidth:1.5,
    borderColor:"#E9E8ED",
    height:45,
    width:'85%',
    borderRadius:10,
    marginLeft:'7.5%',
    marginBottom:30,
  },
  textInput:{
    fontSize:16,
    color:'#4E1396',
    fontWeight:500,
   marginLeft:'7.5%'
  },
  textInputEndereco:{
    backgroundColor: "#FFF",
    marginTop:10,
    borderWidth:1.5,
    borderColor:"#E9E8ED",
    height:80,
    width:'85%',
    borderRadius:10,
    marginLeft:'7.5%',
    marginBottom:30,
  },
  textInputNome:{
    backgroundColor: "#FFF",
    marginTop:10,
    borderWidth:1.5,
    borderColor:"#E9E8ED",
    height:45,
    width:'85%',
    borderRadius:10,
    marginLeft:'7.5%',
    marginBottom:30,
  },
  card: {
  
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    width:'90%',
    height:170,
    marginLeft:'5%',
    marginTop:40,

    marginBottom:40,
  },

  mapa: {
    width: '45%',
    marginLeft:20,
    height: 140,
    backgroundColor: "#000000",
    borderRadius:5,
    marginTop:15,
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

});