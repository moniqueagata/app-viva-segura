import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scroll: {
    width: '100%'
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  profile: {
    width: '100%',
    alignItems: 'center',
    minHeight: 200,
    paddingTop: 33
  },

  // Foto de perfil

  photoUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    position:  'relative',
  },

  upload: {
    width: 120,
    height: 120,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  },

  // ----

  textNome: {
    fontSize: 20,
    fontWeight: '500',
    color: '#414141',
    marginBottom: 4
  },

  id: {
    fontSize: 18,
    fontWeight: '400',
    color: '#909090',
  },

  buttonEdit: {
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6925b8',
    borderRadius: 22,
    marginTop: 20
  },

  textWhite: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff'
  },

  settings: {
    width: '100%',
    marginTop: 24
  },

  sessions:{
    fontSize: 16,
    color: '#606060',
    marginVertical: 10
  },

  gridButtons: {
    width: '100%',
    minHeight: 100,
    alignItems: 'center',
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 13
  },

  grid: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23
  },

  textButton: {
    fontSize: 17,
    fontWeight: '500',
    color: '#454545',
  },

  circle: {
    width: 47,
    height: 47,
    borderRadius: '100%',
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logout: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },

  buttonLogout: {
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textRed: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.5,
    color: '#909090',
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