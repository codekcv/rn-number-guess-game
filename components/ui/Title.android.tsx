import { StyleSheet, Text } from 'react-native';

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
    borderWidth: 25,
    borderColor: 'white',
    padding: 12,
    marginTop: 12,
    width: 300,
    maxWidth: '80%',
  },
});
