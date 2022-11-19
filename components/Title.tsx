import { COLORS } from '@utils/constants';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.accent500,
    padding: 12,
    marginTop: 12,
  },
});
