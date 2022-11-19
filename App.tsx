import GameOverScreen from '@screens/GameOverScreen';
import GameScreen from '@screens/GameScreen';
import StartGameScreen from '@screens/StartGameScreen';
import { COLORS } from '@utils/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  function handlePickedNumber(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function handleGameOver() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onNumberPick={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[COLORS.primary700, COLORS.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
