import GameScreen from '@screens/GameScreen';
import StartGameScreen from '@screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function handlePickedNumber(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onNumberPick={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
