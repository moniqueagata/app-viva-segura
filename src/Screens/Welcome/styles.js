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

  header: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  texts: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 9
  },

  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#6925b8', 
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 14,
    fontWeight: '300',
    color: '#505050',
    textAlign: 'center'
  },

  imagem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    gap: 15,
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '100%',
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
    marginVertical: 8
  },

  txLink: {
    color: '#919191',
    fontSize: 16,
    fontWeight: '400',
  },

  link: {
    color: '#9131ff',
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline'
  },


});