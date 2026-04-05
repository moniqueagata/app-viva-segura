import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  barra: {
    flex: 1,
    height: 8,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: '16%'
  },

  barraPurple: {
    height: '100%',
    width: '100%',
    backgroundColor: '#6925b8',
    borderRadius: 4
  },

  btnExit: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22
  },

  titulo: {
    fontSize: 28,
    fontWeight: '500',
    color: '#6925b8', 
    textAlign: 'center',
    letterSpacing: 0.7,
  },

  inputsContainer: {
    gap: 33,
    alignItems: 'center',
    width: '95%',
    marginTop: 9
  },

  validacoesContainer: {
    width: '85%',
    gap: 5
  },

  textValidar: {
    fontSize: 15,
    fontWeight: '400',
    color: '#515151',
  },

  termosContainer: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12
  },

  boxContainer: {
    paddingRight: 8
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxChecked: {
    backgroundColor: '#550fa4',
    borderColor: '#550fa4',
  },

  textBox: {
    fontSize: 14,
    color: '#6d4c92',
    fontWeight: '500',
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,  
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
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
  },

  modalContainer: {
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    margin: 0,
  },

  modal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleCheck: {
    width: 150,
    height: 150,
    backgroundColor: '#8e3deb',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  tituloModal: {
    fontSize: 30,
    fontWeight: '500',
    color: '#515151',
    letterSpacing: 0.5,
    marginBottom: 11
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: '400',
    color: '#717171',
    marginBottom: 60
  },

  buttonModal: {
    backgroundColor: '#6925b8', 
    width: '70%',
    height: 54,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

});