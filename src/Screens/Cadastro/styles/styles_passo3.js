import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22
  },

  titulo:{
    color: '#3f0088',
    fontSize: 22,
    fontWeight: '500',
  },

  inputsContainer: {
    gap: 22,
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
  },

  validacoesContainer: {
    width: '100%',
    paddingHorizontal: 15,
    gap: 5
  },

  textValidar: {
    fontSize: 14,
    fontWeight: '300',
    color: '#808080',
  },

  termosContainer: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12
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
    marginVertical: '10%'
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
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
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