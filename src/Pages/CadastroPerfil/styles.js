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

  barraView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  barraLoading: {
    width: '90%',
    height: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
  },

  loadingPurple: {
    width: '10%',
    height: 8,
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
  },

  titulo: {
    fontSize: 29,
    fontWeight: '700',
    color: '#220049', 
    textAlign: 'center',
    letterSpacing: 0.7,
    marginBottom: 30,
  },

  viewCard: {
    width: '100%',
    height: 240,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: '400',
    color: '#545454',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    height: 120,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 33,
  },

  icone: {
    width: 70,
    height: 70,
    marginRight: 14,
    marginLeft: 14,
  },

  viewDesc: {
    width: '70%',
    paddingLeft: 10,
    justifyContent: 'center'
  },

  tituloCard: {
    fontSize: 21,
    fontWeight: '700',
    color: '#550fa4', 
  },

  desc: {
    fontSize: 16,
    color: '#545454',
    marginBottom: 5,
    marginTop: 4,
    paddingRight: 15,
    fontWeight: '400'
  },

  linkView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 90,
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
    textDecorationLine: 'underline',
  }
  
});