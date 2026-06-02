import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#ffffff'
  },
  fundoEncima: {
    backgroundColor: "#550FA4",
    height: 110,
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginTop:40,
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
    height:40,
    marginLeft:'5%',
    backgroundColor:"#550FA4",
    borderRadius:20,
    flexDirection:'row',
marginBottom:'10%',
marginTop:15,

  },
  botaoTexto:{
    fontSize:18,
    fontWeight:300,
    color:'#fff',
    textAlign:'center',
    marginTop:7,
    marginLeft:30,
  },
  imagemMais:{
    height:20,
    width:20,
    marginTop:12,
    marginLeft:10,
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
  imagemI:{
    width:12,
    height:12,
    marginTop:20,
    marginLeft:5,
  },
  pontos:{
    fontSize:30,
    color:'#B6B6B6',
    position:'absolute',
    bottom:10,
   right:30,

  },

});