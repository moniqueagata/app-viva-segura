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

  logo: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },

  titulo: {
    fontSize: 28,
    fontWeight: '500',
    color: '#6925b8', 
    textAlign: 'center',
    letterSpacing: 0.7,
  },

  inputsContainer: {
    gap: 25,
    alignItems: 'center',
    width: '100%'
  },

  senhaContainer: {
    alignItems: 'center',
    width: '100%',
  },

  textEsqueciSenha: {
    fontSize: 16,
    fontWeight: '400',
    color: '#a052fa',
    marginTop: 5,
    paddingLeft: '55%'
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,  
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '80%',
    height: 60,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
    marginTop: '5%'
  },

  linkView: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  txLink: {
    color: '#947faa',
    fontSize: 16,
    fontWeight: '400',
  },

  link: {
    color: '#f833a6',
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: '500',
  }
  
});