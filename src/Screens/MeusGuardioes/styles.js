import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scroll: {
    flex: 1,
    width: '100%',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 60,
    paddingBottom: 20,
    gap: 16,
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6925b8',
  },

  tituloIcon: {
    width: 28,
    height: 28,
    tintColor: '#6925b8',
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },

  listaGuardioes: {
    gap: 12,
    marginBottom: 8,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  cardInfo: {
    flex: 1,
    gap: 4,
  },

  cardTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  cardNome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#220049',
  },

  badge: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6925b8',
    backgroundColor: '#f0e6ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },

  cardTelefone: {
    fontSize: 13,
    color: '#888',
  },

  cardAcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  btnChat: {
    backgroundColor: '#6925b8',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },

  btnChatText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  btnRemover: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff0f0',
    borderWidth: 1,
    borderColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnRemoverTexto: {
    color: '#e53935',
    fontSize: 14,
    fontWeight: '700',
  },

  vazio: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 16,
  },

  vazioTexto: {
    fontSize: 15,
    color: '#aaa',
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#6925b8',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginTop: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});