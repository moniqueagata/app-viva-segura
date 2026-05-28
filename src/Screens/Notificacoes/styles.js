import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },

  tituloHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: '#6925b8'
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: 'stretch',
  },

  notificacaoCard: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(106, 37, 184, 0.10)',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(106, 37, 184, 0.25)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 14,
},

notificacaoIcon: {
    width: 52,
    height: 52,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.29)',
},

notificacaoTextoWrapper: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
},

notificacaoApp: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6925b8',
    textAlign: 'left',
},

notificacaoTexto: {
    fontSize: 15,
    fontWeight: '400',
    color: '#3a3a3a',
    textAlign: 'left',
},

});