import { StyleSheet, Dimensions} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f06543',
  },

  viewPrincipal: {
    flex: 1,
  },

  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b69ec0',
  },

  barraPesquisa: {
    position: 'absolute',
    width: '100%',
    height: SCREEN_HEIGHT, // O painel tem o tamanho da tela, mas começa lá embaixo
    backgroundColor: 'white',
    top: SCREEN_HEIGHT - 150, // Faz aparecer apenas os primeiros 150px (ajuste conforme quiser)
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 0,
    // Sombra para dar profundidade
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },

  viewPuxador: {
    height: '5%',
    justifyContent: 'center',
    
  },

  puxador: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 0,
  },

  viewPesquisa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  pesquisa: {
    backgroundColor: '#a1a1a159',
    borderRadius: 10,
    width: '80%'
  },

});