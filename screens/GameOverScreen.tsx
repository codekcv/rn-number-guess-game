import PrimaryButton from '@components/ui/PrimaryButton';
import Title from '@components/ui/Title';
import COLORS from '@utils/constants';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  roundsNumber: number;
  userNumber: number;
  onNewGame: () => void;
};

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onNewGame,
}: Props) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('@assets/images/success.png')}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: { fontFamily: 'open-sans-bold', color: COLORS.primary500 },
});
