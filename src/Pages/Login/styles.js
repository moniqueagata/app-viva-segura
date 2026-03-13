import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  isotipo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop: 50,
  },

  titulo: {
    color: '#220049',
    fontSize: 24,
    fontWeight: '700',
  },

  inputView: {
    width: '100%',
    alignItems: 'center'
  },

  label: {
    alignSelf: 'flex-start',
    color: '#550fa4',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: '10%',
  },

  inputCpf: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 50,
    borderRadius: 30,
    padding: 25,
    color: '#858585',
    fontSize: 17,
    marginBottom: 22,
  },

  inputSenha: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: 50,
    borderRadius: 30,
    padding: 25,
    color: '#858585',
    fontSize: 17,
    marginBottom: 7,
  },

  inputContainer: {
    position: "relative",
    width: "100%",
    alignItems: 'center'
  },

  icone: {
    width: 22,
    height: 22,
    position: "absolute",
    right: '12%',
    top: 15,
  },

  desc: {
    color: '#AE7CE6',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginRight: '8%',
    marginBottom: 25,
  },

  btnPurple: {
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },

  linkView: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  txLink: {
    color: '#ad99c3',
    fontSize: 16,
    fontWeight: '400',
  },

  link: {
    color: '#ef8fa6',
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: '500',
  }
  
});