import { StyleSheet, Dimensions} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Card Topo
  cardResumo: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 999,
  },

  modalTopo: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 100,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5c0eaf',
  },
  
  // ---------

  content: {
    flex: 1,
    width: '100%',
  },

  circle: {
    width: 30,
    height: 30,
    backgroundColor: '#a262e6',
    borderRadius: '100%',
    borderWidth: 4,
    borderColor: '#d0b2f0'
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
    backgroundColor: 'trasnparent',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },

  input: {
    width: '85%',
    height: 50,
    backgroundColor: 'trasnparent',
    paddingRight: 10,
    fontSize: 15,
    color: '#505050'
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

  subtitulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#653f8f',
  },

  button: {
    width: 160,
    height: 40,
    backgroundColor: '#6925b8',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
    borderRadius: 30,
  },

  txWhite: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  },

  card: {
    width: '95%',
    height: 110,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
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