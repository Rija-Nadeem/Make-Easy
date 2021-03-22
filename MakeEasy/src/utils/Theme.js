import {Dimensions, Platform} from 'react-native';

export const colors = {
  primary: '#22c7b8',
  secondary: '#fbfbfd',
  background: '#fbfbfd',
  button: '#22c7b8',
  darkBackground: '#fbfbfd',
  lightBackground: '#fbfbfd',
  grey: '#a3a3a3',
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const metrics = {
  width: width,
  height: height,
  defaultMargin: Dimensions.get('window').width * 0.05,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
};

export const fonts = {
  primary: Platform.select({
    android:'Roboto-Regular',
    ios:'Roboto-Regular'
  }),
  primaryBold: Platform.select({
    android:'Roboto-Black',
    ios:'Roboto-Black'
  }),
  secondary: Platform.select({
    android:'Roboto-Thin',
    ios:'Roboto-Thin'
  }),
  secondaryBold: Platform.select({
    android:'Roboto-Light',
    ios:'Roboto-Light'
  }),
}
