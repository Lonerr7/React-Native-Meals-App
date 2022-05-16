import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Subtitle;
