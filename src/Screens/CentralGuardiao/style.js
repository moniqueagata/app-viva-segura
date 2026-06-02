import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },

  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 15
  },

  tituloHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5A189A', 
  },

  scroll: {
    flex: 1,
  },

  content: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center'
  },

  bigIconTop: {
    width: 90,
    height: 90,
    marginTop: 20,
    marginBottom: 15,
  },

  tituloCall: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A0033',
    marginBottom: 20,
    textAlign: 'center'
  },

  searchInputContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCD6F7',
    marginBottom: 35,
  },

  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#333',
  },

  session: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 100, 
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4FD1C5', 
  },

  cardButtons: {
    width: '100%',
    gap: 10,
  },

  perguntaContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F7F9FA', 
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },

  perguntaContainerAberta:{
        paddingBottom: 20, 
  },

  textResposta:{
        fontSize: 14,
        color: '#4A5568',
        lineHeight: 25
  },

  respostaContainer:{
        marginTop:5,
       
  },

  button: {
    width: '100%',
  },

  textFaq: {
    fontSize: 18,
    color: '#1a1c1f',
    marginTop:10
  },

  mostrarMais: {
    fontSize: 14,
    color: '#4FD1C5',
    marginTop: 15,
    fontWeight: '500'
  },

  // BOTÃO (FALE CONOSCO)
  footerChatContainer: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  textFaleConosco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4FD1C5',
  },

  floatingChatBtn: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#4FD1C5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});