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
    height: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
    justifyContent: 'center',
    overflow: 'hidden',
  },

  loadingPurple: {
    width: '20%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
    left: 0
  },

  txContexto: {
    fontSize: 22,
    fontWeight: '700',
    color: '#550fa4',
    letterSpacing: 0.7,
  },

  viewLogo: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  titulo:{
    color: '#313131',
    fontSize: 20,
    fontWeight: '400',
  },

  viewCard: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 50
  },

  card: {
    width: '100%',
    height: 120,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#ebdafd',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
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

  cardText: {
    flexDirection: 'row',
    gap: 10,
  },

  tituloCard: {
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: 0.7,
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