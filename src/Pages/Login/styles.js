import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  isotipo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
    marginTop: 40,
  },

  titulo: {
    color: '#220049',
    fontSize: 30,
    fontWeight: '700',
  },

  inputView: {
    width: '100%',
    alignItems: 'center'
  },

  label: {
    alignSelf: 'flex-start',
    color: '#550fa4',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 35,
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#f1f1f1',
    width: '90%',
    height: 50,
    borderRadius: 30,
    padding: 15,
    marginBottom: 26,
  },

  desc: {
    color: '#AE7CE6',
    fontSize: 14,
    fontWeight: '300',
    alignSelf: 'flex-end',
    paddingRight: 27,
    marginBottom: 20,
  },

  btnPurple: {
    backgroundColor: '#550fa4', 
    width: '80%',
    height: 55,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '400',
  },

  linkView: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  txLink: {
    color: '#ad99c3',
    fontSize: 14,
    fontWeight: '300',
  },

  link: {
    color: '#ef8fa6',
    paddingLeft: 4,
  }
  
});