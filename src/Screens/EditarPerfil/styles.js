import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    gap: 36
  },

  buttonHeader: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },

  tituloHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: '#6925b8'
  },

  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Foto de Perfil

  photoUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    position:  'relative',
    marginVertical: 10
  },

  upload: {
    width: 150,
    height: 150,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    borderWidth: 2,
    borderColor: '#6925b8'
  },

  edit: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6925b8',
    borderRadius: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0
  },

  // ----

  gridInputs: {
    width: '95%',
    minHeight: 400,
    marginTop: 30,
    gap: 5
  },

  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#454545',
    paddingLeft: 8
  },

  inputContainer: {
    width: '100%',
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    width: '100%',
    height: 55,
    outlineStyle: 'none',
    fontSize: 18
  },

  buttonPurple: {
    width: '90%',
    height: 60,
    backgroundColor: '#6925b8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: '30%'
  },

  textWhite: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  }


  
});