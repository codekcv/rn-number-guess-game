import { Dimensions } from 'react-native';

const isSmallDevice = Dimensions.get('window').width < 380;

export default isSmallDevice;
