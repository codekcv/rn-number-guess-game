import { Platform, StyleSheet, Text } from 'react-native';

type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: 'white',
    padding: 12,
    marginTop: 12,
    width: 300,
    maxWidth: '80%',
  },
});
