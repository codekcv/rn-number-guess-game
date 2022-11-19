import COLORS from '@utils/constants';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  roundNumber: number;
  guess: number;
};

export default function GuessItemLog({ roundNumber, guess }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent&apos;s Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,

    marginVertical: 8,
    backgroundColor: COLORS.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: 'open-sans',
  },
});
