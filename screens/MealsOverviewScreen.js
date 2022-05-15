import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/data';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        duration={item.duration}
        complexity={item.complexity}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
