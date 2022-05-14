import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <>
      <CategoryScreen />
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({});
