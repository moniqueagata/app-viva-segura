import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#000'
  },
  fundoEncima: {
    backgroundColor: "#550FA4",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    height: 20,
    width: 20,
    marginLeft: 20,
     marginTop:35,
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight:'600',
 marginLeft: '10%',
 marginTop:35,
  },
viewMapaEmbaixo:{
  position:'absolute',
  bottom:0,
  width:'100%',
  height:'58%',
  backgroundColor:'#fff',

},
input:{
  height:'100%',
  width:'100%',
  backgroundColor:'#FAFAFA',
  borderRadius:15,
  color:'#550FA4',
  fontSize:20,
  fontWeight:300,
 borderColor:'#FAFAFA',
},

viewBordaRedonda:{
  width:'100%',
  backgroundColor:'#fff',
  height:50,
  borderRadius:50,
  position:'absolute',
  bottom:'55%'
},
lupa:{
  width:22,
  height:22,
  marginLeft:20,
  marginTop:12,
  marginRight:20,
},
lupaView:{
  backgroundColor:'#FAFAFA',
   width:'90%',
   height:47,
   flexDirection:'row',
   marginLeft:'5%',
   borderRadius:15,
   marginTop:20
},
botaoAdicionar:{
  width:'45%',
  height:30,
  marginLeft:20,
  backgroundColor:"#550FA4",
  borderRadius:20,
  flexDirection:'row',
  position:'absolute',
  bottom:15,
},
botaoTexto:{
  fontSize:15,
  fontWeight:400,
  color:'#fff',
marginRight:7,
  marginTop:5,
marginLeft:12,

},
mais:{
  height:20,
  width:20,
  marginTop:3,
},
cardAdiconarEndereco:{
  backgroundColor:'#F6F9F7',
  width:'90%',
  height:120,
  marginLeft:'5%',
  borderRadius:7,
  marginTop:25,
},
endereco:{
  fontSize:21,
  marginLeft:20,
  color:"#550FA4",
  fontWeight:700,
  marginTop:30,

},
mapa:{
  flex: 1, 
  width: '100%',
   height: '100%',
}
});