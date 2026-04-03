import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  isotipo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop: '15%',
  },

  titulo: {
    color: '#545454',
    fontSize: 25,
    fontWeight: '400',
    letterSpacing: 0.4,
  },

  container2: {
    width: '100%',
    gap: 22,
  },

  label: {
    alignSelf: 'flex-start',
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: '10%',
  },

  inputCpf: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 55,
    borderRadius: 30,
    paddingLeft: 25,
    color: '#858585',
    fontSize: 17,
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

  inputSenha: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 55,
    borderRadius: 30,
    paddingLeft: 25,
    color: '#858585',
    fontSize: 17,
    marginBottom: 15,
  },

  inputView: {
    width: '100%',
    alignItems: 'center',
  },

  inputContainer: {
    position: "relative",
  },

  botaoOlho:{
    position: 'absolute',
    right: 45,
    top: 52,
  },

  icone: {
    width: 22,
    height: 22,
  },

  desc: {
    color: '#AE7CE6',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginRight: '8%',
    marginBottom: 25,
  },

  btnPurple: {
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
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