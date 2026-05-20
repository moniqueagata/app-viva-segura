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
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },

  barra: {
    flex: 1,
    height: 8,
    backgroundColor: '#ececec',
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
    justifyContent: 'space-around'
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    color: '#3f0088',
    fontSize: 22,
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
    borderColor: '#eee'
  },

  cardSelecionado: {
    backgroundColor: '#f6ecffbb',
    borderColor: '#c28ffd'
  },

  texts: {
    width: '70%',
    paddingLeft: 22,
    justifyContent: 'center',
  },

  tipo: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#606060', 
  },

  desc: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 5,
    marginTop: 4,
    paddingRight: 15,
    fontWeight: '400'
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '10%',
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
  
});