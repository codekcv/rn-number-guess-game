import { COLORS } from '@utils/constants';
import { useState } from 'react';
import { Pressable, StyleSheet, Alert, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

type Props = {
  onNumberPick: (number: number) => void;
};

export default function StartGameScreen({ onNumberPick }: Props) {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  function handleNumberInput(inputText: string) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function handleConfirm() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
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

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary800,
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
