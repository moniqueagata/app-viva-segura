import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  
  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  barra: {
    flex: 1,
    height: 8,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: '16%'
  },

  barraPurple: {
    height: '100%',
    width: '100%',
    backgroundColor: '#6925b8',
    borderRadius: 4
  },

  btnExit: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22
  },

  texts: {
    width: '100%',
    gap: 12,
    marginBottom: 33
  },

  titulo: {
    fontSize: 28,
    fontWeight: '500',
    color: '#6925b8', 
    textAlign: 'center',
    letterSpacing: 0.7,
  },

  subtitulo: {
    fontSize: 16,
    color: '#545454',
    textAlign: 'center',
  },

  inputsContainer: {
    gap: 22,
    alignItems: 'center',
    width: '100%'
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,  
  },

  btnPurple: {
    backgroundColor: '#6925b8', 
    width: '80%',
    height: 60,
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  txWhite: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },

});