import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    backgroundColor: '#3fc8b3',
    borderRadius: 4,
    
  },

  btnExit: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    marginEnd: 20
  },

  texts: {
    width: '100%',
    gap: 12,
    marginBottom: 33
  },

  titulo: {
    fontSize: 25,
    fontWeight: '500',
    color: '#3fc8b3', 
    textAlign: 'center',
    letterSpacing: 0.7,
  },

  subtitulo: {
    fontSize: 16,
    color: '#207a6c',
    textAlign: 'center',
  },

  inputsContainer: {
    gap: 20,
    alignItems: 'center',
    width: '100%'
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,  
    marginTop: 10
  },

  btnPurple: {
    backgroundColor: '#3fc8b3', 
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