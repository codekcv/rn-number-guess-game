import InstructionText from '@components/game/InstructionText';
import Card from '@components/ui/Card';
import PrimaryButton from '@components/ui/PrimaryButton';
import Title from '@components/ui/Title';
import COLORS from '@utils/constants';
import { useState } from 'react';
import {
  StyleSheet,
  Alert,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

type Props = {
  onNumberPick: (number: number) => void;
};

export default function StartGameScreen({ onNumberPick }: Props) {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  const { height } = useWindowDimensions();

  function handleNumberInput(inputText: string) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function handleConfirm() {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Must be a number between 1 to 99.', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);

      return;
    }

    onNumberPick(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>

          <Card>
            <InstructionText style={styles.instruction}>
              Enter a number
            </InstructionText>

            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={handleNumberInput}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: { flex: 1, marginTop: 96, alignItems: 'center' },
  instruction: { marginBottom: 12 },
  numberInput: {
    height: 54,
    width: 54,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
    width: '100%',
  },
  buttonContainer: {
    width: '40%',
  },
});
