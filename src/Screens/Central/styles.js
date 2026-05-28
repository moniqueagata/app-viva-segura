import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 10,
    gap: 36
  },

  buttonHeader: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: '#6925b8'
  },

  scroll: {
    width: '100%',
  },

  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 22,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  tituloContainer: {
    width: '95%',
    marginTop: 20,
  },

  titulo: {
    fontSize: 35,
    fontWeight: '500',
    color: '#220049',
  },

  searchInput: {
    width: '100%',
    flexDirection: 'row',
    height: 58,
    backgroundColor: '#fdfdfd',
    borderRadius: 30,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#eee',
  },

  input: {
    height: 58,
    width: '78%',
    borderRadius: 35,
    paddingHorizontal: 15,
    fontSize: 18,
    outlineStyle: 'none',
  },

  btnEnviar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6925b8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  btnEnviarTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  chat: {
    width: 240,
    height: 55,
    backgroundColor: '#6925b8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    gap: 10,
    marginVertical: 20
  },

  textChat: {
    fontSize: 19,
    fontWeight: '500',
    color: '#fff'
  },

  session: {
    width: '100%',
    minHeight: 200,
    gap: 16,
    marginVertical: 8,
  },

  subtitulo: {
    fontSize: 21,
    fontWeight: '500',
    marginBottom: 5,
    color: '#220049',
  },

  card: {
    width: '100%',
    minHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'flex-start',
    gap: 22,
    marginBottom: 20,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 4,
    paddingLeft: 5
  },

  categoria: {
    fontSize: 21,
    fontWeight: '500',
    color: '#6925b8'
  },

  cardButtons: {
    width: '100%',
    paddingHorizontal: 8,
    gap: 5
  },

  button: {
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textFaq: {
    fontSize: 17,
    fontWeight: '400',
    color: '#404040',
    lineHeight: 24
  },

  textResposta: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666',
    lineHeight: 22,
    paddingHorizontal: 3,
    paddingBottom: 8,
  },

  linha: {
    width: '100%',
    height: 2,
    backgroundColor: '#eee',
    borderRadius: 2,
    marginVertical: 11,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    gap: 12,
  },

  modalIcone: {
    fontSize: 40,
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#220049',
  },

  modalTexto: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },

  modalBotao: {
    marginTop: 8,
    backgroundColor: '#6925b8',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
  },

  modalBotaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});