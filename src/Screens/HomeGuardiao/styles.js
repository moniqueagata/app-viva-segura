import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    backgroundColor: '#F3F9F7',
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF4F1',
    padding: 10,
    borderRadius: 15,
  },
  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  headerText: {
    color: '#4B0082',
    fontSize: 15,
    marginLeft: 10,
    flex: 1
  },
  mapPlaceholder: {
    width: '50%',
    height: 110,
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#4B0082',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  }
})