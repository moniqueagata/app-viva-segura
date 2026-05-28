import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#ffffff',
  },

  content: {
    flex: 1,
    width: '100%',
  },

  userContent: {
    maxWidth: 300,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  upload: {
    width: 43,
    height: 43,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: "#1b1b1b",
  },

 fundoEmbaixo: {
 width: '100%',
    height: 88,
    position:'absolute',
    bottom:0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#550FA4',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 3,
    paddingHorizontal: 10
},
botao: {
    backgroundColor: "#FAFAFA",
    width: '70%',
    borderRadius: 10,
    marginBottom: 27,
      height: 53,
     marginLeft: '15%',
     alignItems: "center",
   flexDirection:'row',
  },

  texto: {
    color: "#550FA4",
    fontSize: 20,
    fontWeight: "500",
    marginTop:2,
      marginLeft: '10%',
  },
  imagem:{
      height: 33,
       width: 33,
         marginLeft: '5%',
  },
  textoSosPequeno2:{
    color: "#5e5d5d",
    fontSize: 16,
        fontWeight:300,
  
     textAlign:'center',
        marginBottom: 40,
  },
    textoSosPequeno:{
    color: "#5e5d5d",
    fontSize: 16,
        fontWeight:300,
     marginTop:5,
     textAlign:'center',
  },
  textoEmergencia:{
    color: "#F66E91",
    fontSize: 18,
        fontWeight:600,
     marginTop:1,
          marginBottom: 2,
     textAlign:'center',
  },
  imagemSos:{
     height: 178,
       width: 178,
        marginBottom: 15,
         marginLeft: '29%',
         marginTop:9,
  },
  textoAjuda:{
     color: "#653F8F",
    fontSize: 16,
        fontWeight:700,
     marginTop:1,
          marginBottom: 25,
     textAlign:'center',
  },
  viewFlex:{
    width: '100%',
    height: 88,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 33,
    marginBottom: 25,
  },
 
  ola:{
    fontSize:16,
    fontWeight:'bold',
    color: "rgb(85, 15, 164)",
    marginTop:35,
    marginLeft:10
  },
  iconiUsario:{
    width:36,
    height:36,
   borderRadius:'100%',
   marginLeft:15,
   marginTop:25,
  },

  // Navegação
  navegacao: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#6925b8',
    paddingBottom: 3,
    paddingHorizontal: 10
  },

  line: {
    height: 4,
    backgroundColor: '#ff80aa',
    borderRadius: 2,
    top: 0,
    left: 0,
    position: 'absolute',
  },

  buttonNav: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  textNav: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff'
  },

});