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
    height: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
    justifyContent: 'center',
    overflow: 'hidden',
  },

  loadingPurple: {
    width: '55%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
    left: 0
  },

  viewLogo: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%'
  },

  logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
  },

  viewText: {
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    color: '#313131',
    fontSize: 20,
    fontWeight: '400',
  },

  inputView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
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
    alignItems: 'center',
  },

  inputTel:{
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 50,
    borderRadius: 30,
    paddingLeft: 70,
    color: '#858585',
    fontSize: 17,
    marginBottom: 22,
  },

  ddTelefone: {
    position: "absolute",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '800',
    color: '#7632c5',
    left: '12%',
    top: 47,
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