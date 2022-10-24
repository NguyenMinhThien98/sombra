import {Dimensions} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

const heightMobileUI = 896;
const widthMobileUi = 414;

export const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / widthMobileUi;
};

export const responsiveHeight = height => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};

export default { width, height, responsiveHeight, responsiveWidth}
