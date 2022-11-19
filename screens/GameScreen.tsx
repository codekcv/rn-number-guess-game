import InstructionText from '@components/game/InstructionText';
import NumberContainer from '@components/game/NumberContainer';
import Card from '@components/ui/Card';
import PrimaryButton from '@components/ui/PrimaryButton';
import Title from '@components/ui/Title';
import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GuessItemLog from '@components/game/GuessItemLog';

const MIN_BOUNDARY = 1;
const MAX_BOUNDARY = 99;

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNumber;
}

type Props = {
  userNumber: number;
  onGameOver: (totalRounds: number) => void;
};

let minBoundary = MIN_BOUNDARY;
let maxBoundary = MAX_BOUNDARY;

export default function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuessNum = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
    [userNumber]
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuessNum);
  const [guessRounds, setGuessRounds] = useState([initialGuessNum]);

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds.length]);

  useEffect(() => {
    minBoundary = MIN_BOUNDARY;
    maxBoundary = MAX_BOUNDARY;
  }, []);

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
    setGuessRounds((prevGuessRound) => [newRndNum, ...prevGuessRound]);
  }

  const respFlexDirection = height < 380 ? 'row' : 'column';

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: respFlexDirection,
          alignItems: 'center',
        }}
      >
        <Title>Opponent&apos;s Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>

      <Card>
        <InstructionText style={styles.instruction}>
          Higher or lower?
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(null, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(null, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.roundsContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => String(item)}
          renderItem={(data) => (
            <GuessItemLog
              roundNumber={guessRounds.length - data.index}
              guess={data.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instruction: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
    width: '100%',
  },
  buttonContainer: {
    width: '40%',
  },
  roundsContainer: {
    flex: 1,
    padding: 16,
    marginTop: 24,
  },
});
