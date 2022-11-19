import PrimaryButton from '@components/ui/PrimaryButton';
import Title from '@components/ui/Title';
import COLORS from '@utils/constants';
import { isSmallScreenWidth } from '@utils/isSmallScreen';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type { ViewStyle } from 'react-native';

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
  const { width, height } = useWindowDimensions();

  const respDisplay = height < 380 ? 'none' : 'flex';
  const respMarginTop = height < 380 ? 24 : 0;

  const respImgStyle: ViewStyle = {
    display: respDisplay,
    width: width < 380 ? 200 : 300,
    height: width < 380 ? 200 : 300,
    borderRadius: width < 380 ? 100 : 150,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>

      <View style={[styles.imageContainer, respImgStyle]}>
        <Image
          style={styles.image}
          source={require('@assets/images/success.png')}
          resizeMode="cover"
        />
      </View>

      <Text style={[styles.summaryText, { marginTop: respMarginTop }]}>
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
    width: isSmallScreenWidth ? 200 : 300,
    height: isSmallScreenWidth ? 200 : 300,
    borderRadius: isSmallScreenWidth ? 100 : 150,
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
