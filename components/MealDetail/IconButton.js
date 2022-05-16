import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ icon, color }) => {
  return (
    <View>
      <Pressable>
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;
