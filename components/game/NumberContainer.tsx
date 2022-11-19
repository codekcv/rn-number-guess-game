import { COLORS } from '@utils/constants';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: number;
};

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    marginTop: 24,
    padding: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: COLORS.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: 36,
  },
});
