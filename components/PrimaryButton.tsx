import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function PrimaryButton({ children }: Props) {
  function handleOnPress() {
    alert(1);
  }

  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? [styles.InnerContainer, styles.pressed]
            : styles.InnerContainer;
        }}
        onPress={handleOnPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  InnerContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
