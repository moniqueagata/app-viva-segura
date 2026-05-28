import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 12,
  },

  btnVoltar: {
    padding: 4,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#ccc',
  },

  headerNome: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#220049',
  },

  dots: {
    fontSize: 18,
    color: '#888',
    letterSpacing: 2,
  },

  lista: {
    padding: 16,
    gap: 10,
  },

  bolha: {
    maxWidth: '75%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 4,
  },

  bolhaDele: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },

  bolhaMinha: {
    backgroundColor: '#6925b8',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },

  textoBolha: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  textoBolhaMinha: {
    color: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 10,
  },

  input: {
    flex: 1,
    height: 46,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    paddingHorizontal: 18,
    fontSize: 15,
    color: '#333',
  },

  btnEnviar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#6925b8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  setaEnviar: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});