import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
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
    gap: 36,
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
    flex: 1,
    width: '100%',
  },

  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  // Data 
  coontainerData: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20
  },

  data: {
    fontSize: 18,
    fontWeight: '500',
    color: '#220049'
  },

  containerMensagem: {
    marginVertical: 5,
    maxWidth: '100%',       
  },

  // Balões de mensagem
  balao: {
    maxWidth: '100%',
    minHeight: 55,
    padding: 14,
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },

  balaoD: {
    backgroundColor: '#9149e4',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 2,
  },

  textWhite: {
    fontSize: 19,
    fontWeight: '400',
    color: '#fff'
  },

  balaoE: {
    backgroundColor: '#f8f8f8',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 2,
  },

  textBlack: {
    fontSize: 19,
    fontWeight: '400',
    color: '#454545'
  },
  // ------

  // Hora 

  horario: {
    fontSize: 15,
    fontWeight: '500',
    color: '#757575',
  },

  inputBar:{
    width: '100%',
    height: 88,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    gap: 10
  },

  input: {
    width: '85%',
    height: 55,
    borderRadius: 30,
    backgroundColor: '#f8f8f8',
    fontSize: 19,
    padding: 20,
    outlineStyle: 'none'
  },

  send: {
    width: 53,
    height: 53,
    backgroundColor: '#6925b8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%'
  }

  
});