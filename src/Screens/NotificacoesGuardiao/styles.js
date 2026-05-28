import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    width: '100%',
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    gap: 20, 
    paddingTop: 20,
    marginTop:20

    },

  buttonHeader: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6925b8'
  },

  content: {
    flex: 1,
    justifyContent: 'center', 
     alignItems: 'center',
    paddingHorizontal: 40,
    bottom: 40, 
   },

  sinoIcone: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  textoVazio: {
    fontSize: 16,
    color: '#a6e3d9', 
    textAlign: 'center',
    fontWeight: '500',
  }
})