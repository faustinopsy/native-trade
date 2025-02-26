import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    maxWidth: '80%',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridCard: {
    width: '45%',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryCard: {
    width: '48%',
    backgroundColor: '#3498db',
  },
  secondaryCard: {
    width: '48%',
    backgroundColor: '#2ecc71',
  },
  gridTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  gridText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
  },
});