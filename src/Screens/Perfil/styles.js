  import { StyleSheet } from "react-native";

  export default StyleSheet.create({
    container: {
  flex: 1,
  backgroundColor: '#fff',
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
      paddingTop: 25
    },

    // Foto de perfil

    photoUpload: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
      position:  'relative',
  
    },

    upload: {
      width: 133,
      height: 133,
      backgroundColor: '#e7e7e7',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
            marginTop: 25,
      borderWidth: 3,
      borderColor: '#6925b8',
    },

    // ----

    textNome: {
      fontSize: 25,
      fontWeight: '500',
      color: '#000000',
      marginBottom: 4
    },

    status: {
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
      fontSize: 16,
      fontWeight: '400',
      color: '#fff'
    },

    settings: {
      width: '100%',
      marginTop: 24
    },

    sessions:{
      fontSize: 18,
      color: '#606060',
      marginVertical: 7
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

    // Toggle ON/OFF

    toggle: {
      width: 50,
      height: 22,
      borderRadius: 20,
      backgroundColor: '#27e456',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: 2,
    },

    circleToggle: {
      width: 18,
      height: 18,
      borderRadius: '100%',
      backgroundColor: '#fff',
    },

    // -----

    logout: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 30
    },

    buttonLogout: {
      width: 130,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textRed: {
      fontSize: 17,
      fontWeight: '500',
      letterSpacing: 0.2,
      color: '#ad2424',
    },

    // Navegação

    navegacao: {
      width: '100%',
      height: 88,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingBottom: 3,
      paddingHorizontal: 10
    },

    line: {
      height: 4,
      backgroundColor: '#6925b8',
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
      color: '#ccc'
    },
    
  });