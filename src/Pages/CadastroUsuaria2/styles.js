import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  barraView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  barraLoading: {
    width: '90%',
    height: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
    justifyContent: 'center',
    overflow: 'hidden',
  },

  loadingPurple: {
    width: '80%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
    left: 0
  },

  txContexto: {
    fontSize: 18,
    fontWeight: '700',
    color: '#550fa4',
    marginTop: '6%',
  },

  viewLogo: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },

  titulo:{
    color: '#313131',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 40,
  },

  container2: {
    width: '100%',
    marginBottom: 60,
  },

  inputContainer: {
    position: "relative",
  },

  botaoOlho:{
    position: 'absolute',
    right: 40,
    top: 50
  },

  icone: {
    width: 22,
    height: 22,
  },

  inputView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  cadeadoSenha:{
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
  },

  cadeado:{
    width:20,
    height:20,
    marginLeft:'10%',
    marginBottom: 8,
  },

  textoSenha:{
    alignSelf: 'flex-start',
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: '1%'
  },

  textoInput:{
    alignSelf: 'flex-start',
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: '10%',
  },

  input:{
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 50,
    borderRadius: 30,
    paddingLeft: 25,
    color: '#858585',
    fontSize: 17,
    marginBottom: 18,
  },

  viewVerificacao: {
    width: '100%',
  },

  txVerificacao:    {
    flexDirection:'row'
  },

  descSenha: {
    marginLeft:'10%',
    color:'#653f8f',
    fontSize:13,
    marginRight:'2%',
    fontWeight: '400',
    marginBottom: 5,
  },

  boxContainer: {
    paddingRight: 3,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#550fa4',
    justifyContent: 'center',
    alignItems: 'center',
    },

   boxChecked: {
    backgroundColor: '#550fa4',
    alignItems: 'center',
    justifyContent: 'center'
   },

  iconeChecked: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
   },

  viewTermos:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },

  textPurple: {
    fontSize: 12,
    color:'#653f8f',
    marginLeft: 4,
    marginRight: 4,
  },

  textPink: {
    fontSize: 12,
    color:'#f66e91',
    textDecorationLine: 'underline',
  }, 

  botaoConcluir:{
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },

  textoConcluir:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },

  quadradoTexto:{
    textAlign:'center',
    color:'#550FA4',
  },

  linkView: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  txLink: {
    color: '#ad99c3',
    fontSize: 16,
    fontWeight: '400',
  },

  link: {
    color: '#ef8fa6',
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  }

});