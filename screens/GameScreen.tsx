import Title from '@components/Title';
import { StyleSheet, Text, View } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}

      <View>
        <Text>Higher or lower?</Text>
        {/* + BUTTONS - */}
      </View>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
