import { View, Text } from 'react-native';

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>MealDetailsScreen - {mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
