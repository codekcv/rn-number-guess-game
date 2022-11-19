import NumberContainer from '@components/game/NumberContainer';
import PrimaryButton from '@components/ui/PrimaryButton';
import Title from '@components/ui/Title';
import { useEffect, useMemo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

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
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 99;

export default function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuessNum = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
    []
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuessNum);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function handleNextGuess(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);

      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>

        <View>
          <PrimaryButton onPress={handleNextGuess.bind(null, 'lower')}>
            -
          </PrimaryButton>

          <PrimaryButton onPress={handleNextGuess.bind(null, 'greater')}>
            +
          </PrimaryButton>
        </View>
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
