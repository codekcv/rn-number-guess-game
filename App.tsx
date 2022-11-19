import GameOverScreen from '@screens/GameOverScreen';
import GameScreen from '@screens/GameScreen';
import StartGameScreen from '@screens/StartGameScreen';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import COLORS from '@utils/constants';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'open-sans': require('@assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('@assets/fonts/OpenSans-Bold.ttf'),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function handlePickedNumber(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function handleGameOver() {
    setIsGameOver(true);
  }

  function handleNewGame() {
    setUserNumber(null);
    setRoundsNumber(0);
  }

  let screen = <StartGameScreen onNumberPick={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onNewGame={handleNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.primary700, COLORS.accent500]}
      style={styles.container}
      onLayout={onLayoutRootView}
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
