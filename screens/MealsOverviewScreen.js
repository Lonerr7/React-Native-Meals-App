import { MEALS } from '../data/data';
import { View, Text, StyleSheet } from 'react-native';

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId

  return (
    <View style={styles.container}>
      <Text>Meals Overview - {catId}</Text>
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
