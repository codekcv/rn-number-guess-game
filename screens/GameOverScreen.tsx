import Title from '@components/ui/Title';
import COLORS from '@utils/constants';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function GameOverScreen() {
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

      <View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
      </View>
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
});
