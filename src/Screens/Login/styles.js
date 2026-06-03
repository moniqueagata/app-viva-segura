import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  logo: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  titulo:{
    color: '#3f0088',
    fontSize: 22,
    fontWeight: '500',
    marginVertical: '18%'
  },

  inputsContainer: {
    gap: 25,
    alignItems: 'center',
    width: '100%',
  },

  senhaContainer: {
    alignItems: 'center',
    width: '100%',
  },

  textEsqueciSenha: {
    fontSize: 14,
    fontWeight: '300',
    color: '#6925b8',
    marginTop: 5,
    paddingLeft: '59%'
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '20%' 
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '90%',
    height: 50,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },

  linkView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },

  txLink: {
    color: '#919191',
    fontSize: 14,
    fontWeight: '400',
  },

  link: {
    color: '#9131ff',
    paddingLeft: 4,
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  
});