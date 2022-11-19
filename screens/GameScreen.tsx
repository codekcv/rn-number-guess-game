import NumberContainer from '@components/game/NumberContainer';
import Title from '@components/ui/Title';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

type Props = {
  userNumber: number;
};

export default function GameScreen({ userNumber }: Props) {
  const initialGuessNum = generateRandomBetween(1, 99, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuessNum);
  console.log(
    '🚀 ~ file: GameScreen.tsx ~ line 24 ~ GameScreen ~ randomNumber',
    initialGuessNum
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>

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
