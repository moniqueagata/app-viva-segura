import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  
  headerContainer: {
    marginBottom: 25,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B0082', 
    marginRight: 12,
    marginTop: -4, 
  },
  
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 16,
    color: "#6c27a8",
  },


    subtitle: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 4,
    color: "#777",
  },
  
  chatCard: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6', 
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    position: 'relative', 
  },
  
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  
  textContainer: {
    flex: 1,
    paddingRight: 45, 
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082', 
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: '#8E8E93', 
    fontWeight: '400',
  },
  
  statusText: {
    position: 'absolute',
    top: 18,
    right: 18,
    fontSize: 13,
    color: '#AEAEB2',
  },
});