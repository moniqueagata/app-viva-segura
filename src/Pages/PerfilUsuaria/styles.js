import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  viewUser: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#550fa4',
    marginTop: 35,
  },

  viewText: {
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },

  txNome: {
    fontSize: 25,
    fontWeight: '700',
    color: '#653f8f',
  },

  descGuardiao: {
    fontSize: 13,
    fontWeight: '300',
    color: '#550fa4'
  },

  imageUser: {
    backgroundColor: '#eee',
    width: 150,
    height: 150,
    borderRadius: '100%',
    position: 'relative',
  },

  btnCamera: {
    width: 40,
    height: 40,
    borderRadius: '100%', 
    backgroundColor: '#550fa4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '27%',
    right:  '35%',
    elevation: 5,
  },

  iconCamera: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  viewBtn: {
    flex: 0.8,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 10
  },

  button: {
    width: '100%',
    height: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 22,
  },

  icone: {
    width: 25,
    height: 25,
    transform: [{ scaleX: -1 }],
    resizeMode: 'contain',
  },

  campo: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  iconBtn: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  txButtons: {
    fontSize: 21,
    fontWeight: '400',
    color: '#550fa4',
    paddingLeft: 22,
  },

  txExit: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: '#a43d3d',
    marginTop: '4%'
  },

  navbar: {
    height: 95,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#550fa4',
    flexDirection: 'row',
    gap:'15%',
    position: 'relative',
  },

  linha: {
    width: 65,
    height: 9,
    backgroundColor: '#ff7294',
    borderRadius: 20,
    left: '79%',
    bottom: '95%',
    position: 'absolute'
  },

  iconNav: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },

  
});