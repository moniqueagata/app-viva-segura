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
  
  barraView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  barraLoading: {
    width: '90%',
    height: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
    justifyContent: 'center',
    overflow: 'hidden',
  },

  loadingPurple: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
    left: 0
  },

  viewCheck: {
    width: 220,
    height: 220, 
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkIcon: {
    width: '80%',
    height: '80%',
    borderRadius: '100%',
    backgroundColor: '#63fc9d',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icone: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

   titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '10%',
    color:'#550fa4'
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: '400',
    color: '#545454',
    textAlign: 'center',
    marginBottom: '50%',
    marginTop: 22
  },

  botaoConcluir:{
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },

  textoConcluir:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },

});