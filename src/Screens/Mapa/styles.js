import { StyleSheet, Dimensions} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Card Topo -> cálculo de distância
  modalContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 999,
  },

  modalTopo: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 130,
    borderRadius: 15,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#0000008a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    gap: 10
  },

  left: {
    width: '91%',
    justifyContent: 'center'
  },

  rowM: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 8
  },

  linha: {
    width: '100%',
    height: 2,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginVertical: '4%',
  },

  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#606060',
    paddingVertical: 3,
    paddingLeft: 8
  },

  endereço: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9539ff',
    paddingVertical: 3,
    paddingLeft: 8
  },

  right: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 6,
    gap: 2,
    marginTop: 15
  },

  km: {
    fontSize: 13,
    color: '#606060', 
    fontWeight: '500'
  },
  // ---------

  content: {
    flex: 1,
    width: '100%',
  },

  circle: {
    width: 35,
    height: 35,
    backgroundColor: '#eee',
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#bb7cff'
  },

  pin: {
    width: 34, 
    height: 34, 
    borderRadius: 17,
    backgroundColor: '#ffc5d9',
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 2, 
    borderColor: '#fff',
  },

  scroll: {
    width: '100%',
  },

  painel: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.65,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 14,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent:  'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  contentPainel: {
    width: '100%',
    alignItems: 'center',
    marginVertical: '10%',
    justifyContent: 'space-between',
    paddingBottom: 22
  },

  puxador: {
    width: '20%',
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: '5%',
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputContainer: {
    width: '84%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    gap: 10,
  },

  input: {
    width: '75%',
    height: 50,
    backgroundColor: 'transparent',
    paddingRight: 10,
    fontSize: 15,
    color: '#505050',
  },

  btnSearch: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6925b8',
    borderRadius: 19
  },

  // Foto de perfil
  photoUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    position:  'relative',
  },

  upload: {
    width: 50,
    height: 50,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    overflow: 'hidden'
  },

  lista: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 12
  },

  card: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 17,
    gap: 4
  },

  compartilhar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '8%',
    gap: 10
  },

  subtitulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#653f8f',
  },

  button: {
    width: 160,
    height: 40,
    backgroundColor: '#6925b8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    gap: 10
  },

  txWhite: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  },

  nomeLocal: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6925b8',
  },


  // Navegação
  navegacao: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#6925b8',
    paddingBottom: 3,
    paddingHorizontal: 10
  },

  line: {
    height: 4,
    backgroundColor: '#ff80aa',
    borderRadius: 2,
    top: 0,
    left: 0,
    position: 'absolute',
  },

  buttonNav: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  textNav: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff'
  },

});
