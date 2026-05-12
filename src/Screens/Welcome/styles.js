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
    alignItems: 'center',
    justifyContent: 'center',
  },

  session: {
    width: '100%',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: '600',
    color: '#6925b8', 
    letterSpacing: 0.5,
    marginVertical: 12
  },

  subtitulo: {
    fontSize: 17,
    color: '#717171',
  },

  buttonContainer: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    gap: 20,
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '85%',
    height: 56,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },

  btnWhite: { 
    width: '85%',
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#6925b8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txPurple: {
    color: '#6925b8',
    fontSize: 22,
    fontWeight: '500',
  },


});