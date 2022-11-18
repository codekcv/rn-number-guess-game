import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput />

      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    marginTop: 96,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4, // Android Shadow
    shadowColor: 'black', // iOS Shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
