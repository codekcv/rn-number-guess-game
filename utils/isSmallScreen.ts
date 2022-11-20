import { Dimensions } from 'react-native';

export const isSmallScreenWidth = Dimensions.get('window').width < 380;
export const isSmallScreenHeight = Dimensions.get('window').height < 400;
