import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  
  barraView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  barraLoading: {
    width: '90%',
    height: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#550fa4',
    position: "relative",
  },

  loadingPurple: {
    width: '100%',
    height: 10,
    borderRadius: 20,
    backgroundColor: '#550fa4',
    position: "absolute",
  },

});