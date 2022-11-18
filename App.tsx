import StartGameScreen from '@screens/StartGameScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
