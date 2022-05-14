import { FlatList, View, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/data';

const renderCategoryItem = ({ item }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoryScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        key='categories'
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
