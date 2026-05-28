import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    paddingTop: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082', // Roxo escuro do título "Meu Perfil"
    textAlign: 'center',
    marginVertical: 15,
  },
  avatarContainer: {
    position: 'relative',
    marginVertical: 15,
  },
  avatarPlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 3,
  borderColor: '#56CDA6',

  },
  avatarImage: {
    width: '90%',
    height: '90%',
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#56CDA6', // Verde água do botão de câmera
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cameraIcon: {
    width: 20,
    height: 20,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 25, // Reduzido levemente para equilibrar com o menu maior
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#56CDA6', // Verde água do nome do usuário
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    color: '#4B0082',
    fontWeight: '500',
  },
  menuContainer: {
    width: '100%',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16, // Padding vertical ajustado para a lista maior
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5', // Linha sutil de separação entre os itens
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuItemText: {
    fontSize: 18,
    color: '#4B0082', // Texto em roxo escuro
    fontWeight: '500',
  },
  arrowIcon: {
    width: 14,
    height: 14,
    transform: [{ scaleX: -1 }], // Inverte a seta caso o asset original aponte para a esquerda
  },
  deleteButton: {
    marginTop: 15,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#BA3D3A', // Vermelho sutil para a ação de excluir
    fontSize: 16,
    fontWeight: '500',
  },
});