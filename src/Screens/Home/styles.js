import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    width: '100%',
    height: 88,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 33,
  },

  userContent: {
    maxWidth: 300,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  upload: {
    width: 43,
    height: 43,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: "#1b1b1b",
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },

  subtitulo: {
    color: "#653F8F",
    fontSize: 17,
    fontWeight: '600',
  },

  buttonSos: {
    width: 150,
    height: 150,
    backgroundColor: '#ff88a6',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  borda: {
    width: 160,
    height: 160,
    borderRadius: '100%',
    borderWidth: 2,
    borderColor: '#ff88a6',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },

  descricao:{
    color: '#bbb',
    fontSize: 14,
    fontWeight:200,
    textAlign:'center',
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 30
  },

  titulo: {
    color: "#ff81a0",
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },

  buttons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 30
  },
  
  button: {
    backgroundColor: "#fafafa",
    width: '90%',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: '15%',
    flexDirection:'row',
    gap: 20
  },

  texto: {
    color: "#550FA4",
    fontSize: 18,
    fontWeight: '700',
  },

  // Navegação
  navegacao: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#6925b8',
    paddingBottom: 3,
    paddingHorizontal: 10
  },

  line: {
    height: 4,
    backgroundColor: '#ff80aa',
    borderRadius: 2,
    top: 0,
    left: 0,
    position: 'absolute',
  },

  buttonNav: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  textNav: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff'
  },
});