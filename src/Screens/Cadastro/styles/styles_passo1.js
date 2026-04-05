import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },

  titulo:{
    color: '#6925b8',
    fontSize: 28,
    fontWeight: '500',
  },

  cardContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 33
  },

  cardPerfil: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent'
  },

  cardSelecionado: {
    backgroundColor: '#f2e3ff',
    borderColor: '#c28ffd'
  },

  texts: {
    width: '70%',
    paddingLeft: 22,
    justifyContent: 'center',
  },

  tipo: {
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#7f27e4', 
  },

  desc: {
    fontSize: 16,
    color: '#545454',
    marginBottom: 5,
    marginTop: 4,
    paddingRight: 15,
    fontWeight: '400'
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,  
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '80%',
    height: 55,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  
});