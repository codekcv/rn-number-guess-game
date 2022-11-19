import { COLORS } from '@utils/constants';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: string;
  style?: Record<string, {}>;
};

InstructionText.defaultProps = {
  style: {},
};

export default function InstructionText({ children, style }: Props) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    color: COLORS.accent500,
    fontFamily: 'open-sans',
    fontSize: 24,
  },
});
