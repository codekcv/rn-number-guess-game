import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function PrimaryButton({ children }: Props) {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({ container: {} });
