import { StyleSheet } from 'react-native';

// Define primary colors
export const colors = {
  lightgrayApp: '#E4E4E4',
  primary: '#181818',
  secondary: '#EEF8FF',
  background: '#FFFFFF',
  black: '#000000',
  white: '#FFFFFF',
  red: '#ea0014',
  gray: '#a4a4a4',
  graycustom: '#1B1A1D',
  darkGrey: '#C2C2C2',
  darkGrey2: '#000000b3',

  lightGrey: '#88888A',
  borderColor: '#0000001a',
  placeholderGrey: '#A7A7A7',
  btnDissmiss: '#909090',
  msgGreyBg: '#F2F4F5',
  linecolor: '#D6D6D6',
  lighttext: '#9e9e9e',
  lightPrimary: '#ffffff33',
  lighttext2: '#626262',
  lightWaring: '#FFF4F4',
  warning: '#E31837',
  categoryBackground: '#F0FBFF',
  iconGray: '#92887796',
  yellow: '#ffb134',
  line: '#0000001a',
  unSelectTag: '#eaeaea',
  lightbackground: '#f9f9ff',
  green: '#02C70D',
  skin: '#FFEEC7',
  skyblue: '#DBF4FF',
  switchcolor: '#D6F3FF',
  whiteBackground: '#f9f9ff',
  BlackBackground: '#000000',
  lightBlack: '#1B1A1D',
  lightGray2: '#2929291a',
  lightGray3: '#00000033',
  logobordercolor: '#575760',
  whiteBackgroundlight: '#f9f9ff',
  line: '#D9D9D9',
  logoBorderColor2: '#e3e3e866',
  lightBlack2: '#444148',
  textColor: '#ffffff',
};

// Define common font sizes
export const fontSizes = {
  mSmall: 10,
  small: 12,
  xSmall: 14,
  medium: 16,
  xMedium: 18,
  large: 20,
  mlarge: 22,
  xlarge: 24,
  xxlarge: 53,
};

export const fonts = {
  black: 'Inter_18pt-Black',
  bold: 'Inter-18pt-Bold',
  semiBold: 'Inter-18pt-SemiBold',
  medium: 'Inter-18pt-Medium',
  regular: 'Inter-18pt-Regular',
};





export const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: fontSizes.large,
    color: colors.black,
    fontFamily: fonts.semiBold,
  },
  linkSmallText: {
    fontSize: fontSizes.small,
    color: colors.primary,
    fontFamily: fonts.medium,
  },
  text: {
    color: colors.textColor,
    fontFamily: fonts.medium,
  },
  header: {
    fontSize: fontSizes.xxlarge,
    fontFamily: fonts.black,
    color: colors.white,
    marginBottom: 10,
  },
  btnDelContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.medium,
  },
  btnDismissContainer: {
    alignSelf: 'center',
  },
  btnDismissText: {
    color: colors.background,
    fontFamily: fonts.regular,
  },

  btnDismissBlack: {
    color: colors.black,
    fontFamily: fonts.regular,
  },

  btnOutlineContainer: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  btnOutlineText: {
    color: colors.primary,
    fontFamily: fonts.regular,
  },
  btnContainerDisable: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextDisable: {
    color: colors.black,
    fontFamily: fonts.regular,
  },
});

export default {
  colors,
  fontSizes,
  fonts,
  commonStyles,
};
