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
    fontSize: 22,
    fontWeight: '500',
    color: '#550fa4', 
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 14,
    color: '#545454',
    textAlign: 'center',
    marginBottom: 30,
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
    height: 59,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '400',
  },

  btnWhite: { 
    width: '80%',
    height: 59,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#550fa4', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txPurple: {
    color: '#550fa4',
    fontSize: 19,
    fontWeight: '400',
  },


  // Modal 
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  navModal: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },

  iconExit: {
    width: 35,
    height: 35,
  },

  isotipo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },

  subtituloModal: {
    fontSize: 29,
    fontWeight: '500',
    color: '#550fa4',
    textAlign: 'center',
  },

  btnModal: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    gap: 5,
  },

  txDesc: {
    fontSize: 16,
    color: '#220049',
    fontWeight: '400',
    marginBottom: 5,
  },

  txDesc2: {
    fontSize: 16,
    color: '#220049',
    fontWeight: '400',
    marginBottom: 5,
    marginTop: 17,
  },


});