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
    height: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
  },

  loadingPurple: {
    width: '80%',
    height: 8,
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
  },

  titulo:{
    color: '#220049',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 40,
  },

  container2: {
    width: '100%',
    marginBottom: 60,
  },

  inputContainer: {
    position: "relative",
    width: "100%",
    alignItems: 'center'
  },
  icone: {
    width: 22,
    height: 22,
    position: "absolute",
    right: '12%',
    top: 50,
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
    padding: 25,
    color: '#858585',
    fontSize: 17,
    marginBottom: 15,
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
  }

});