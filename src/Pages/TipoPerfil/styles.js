import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  navbar: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },

  iconExit: {
    width: 28,
    height: 28,
    marginTop: 10,
  },

  isotipo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  subtitulo: {
    fontSize: 24,
    fontWeight: '500',
    color: '#550fa4',
    textAlign: 'center',
  },

  btnView: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    gap: 5,
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
    marginTop: 25,
  },

  txPurple: {
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '400',
  },

  txDesc: {
    fontSize: 16,
    color: '#220049',
    fontWeight: '400',
    marginTop: 5,
  },
  
});