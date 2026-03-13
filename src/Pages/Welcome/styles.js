import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },

  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icone: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  textView: {
    alignItems: 'center',
    marginBottom: 40,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '500',
    color: '#550fa4', 
    textAlign: 'center',
    marginBottom: 13,
  },

  subtitulo: {
    fontSize: 16,
    color: '#545454',
    textAlign: 'center',
    marginBottom: 40,
  },

  btnView: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },

  btnPurple: {
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },

  btnWhite: { 
    width: '80%',
    height: 55,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#550fa4', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txPurple: {
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '400',
  },


});