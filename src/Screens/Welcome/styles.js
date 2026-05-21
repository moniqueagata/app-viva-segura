import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  header: {
    width: '100%',
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  txIcon: {
    width: '100%',
    alignItems: 'center',
    marginTop: '22%',
    gap: 30
  },

  texts: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: '5%'
  },

  titulo: {
    fontSize: 25,
    fontWeight: '500',
    color: '#6925b8', 
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 15,
    fontWeight: '300',
    color: '#505050',
    textAlign: 'center',
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
    marginVertical: '3%',
    gap: 15,
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
    marginVertical: 15
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
    fontWeight: '500',
    textDecorationLine: 'underline'
  },


});