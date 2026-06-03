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
    height: 80,
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
    backgroundColor: '#3fc8b3',
    borderRadius: 4
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22
  },

  titulo: {
    fontSize: 22,
    fontWeight: '500',
    color: '#3fc8b3', 
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
    backgroundColor: '#3fc8b3', 
    width: '80%',
    height: 50,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

});