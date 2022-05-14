import { FlatList, View } from 'react-native';
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
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default CategoryScreen;