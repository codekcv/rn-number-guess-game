import COLORS from '@utils/constants';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <View style={style.container}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary800,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4, // Android Shadow
    shadowColor: 'black', // iOS Shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
