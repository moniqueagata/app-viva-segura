import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    width: '50%',
    height: 10,
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
  },

  titulo:{
    color: '#220049',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 35,
    textAlign: 'center',
    lineHeight: 25,
  },

  inputView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
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
    marginBottom: 22,
  },

  telContainer: {
    position: "relative",
    width: "100%",
    alignItems: 'center'
  },

  inputTel:{
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 50,
    borderRadius: 30,
    paddingLeft: 66,
    color: '#858585',
    fontSize: 17,
    marginBottom: 22,
  },

  ddTelefone: {
    position: "absolute",
    fontSize: 17,
    fontWeight: '700',
    color: '#b4b4b4',
    left: '11%',
    top: 49,
  },

  botaoContinuar:{
    backgroundColor: '#550fa4', 
    width: '70%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoContinuar:{
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