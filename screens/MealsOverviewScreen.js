import { MEALS } from '../data/data';
import { View, Text, StyleSheet } from 'react-native';

const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;