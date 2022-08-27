import {StyleSheet, Platform, Dimensions} from 'react-native';
import colors from '../globals/colors';
import fonts from '../globals/fonts';
import sizes from './sizes';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  containerStylesText: {marginTop: 20, backgroundColor: colors.white},
  containerStylesText2: {flex: 1, marginTop: 20, backgroundColor: colors.white},

  labelStylesText: {
    fontSize: sizes.small,

    color: colors.textLabel,
    backgroundColor: colors.white,
    marginLeft: 30,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: -8,
    position: 'absolute',
  },
  labelStylesTextError: {
    fontSize: sizes.small,
    color: colors.redColor,
    backgroundColor: colors.white,
    marginLeft: 15,
    paddingTop: 5,
  },
  labelStylesTextErrorL: {
    fontSize: sizes.small,
    color: colors.redColor,
    backgroundColor: colors.white,
    // marginLeft: 20,
    paddingTop: 5,
  },
  labelStylesTextErrorR: {
    fontSize: sizes.small,
    color: colors.redColor,
    backgroundColor: colors.white,
    marginLeft: 55,
    paddingTop: 5,
  },
  labelStylesTextError2: {
    fontSize: sizes.small,
    color: colors.redColor,
    backgroundColor: colors.white,
    marginLeft: 20,
    paddingTop: 5,
  },
  labelStylesTextErrorLogin: {
    fontSize: sizes.small,
    color: colors.redColor,
    marginTop: 5,
    marginLeft: 20,
  },
  inputStylesText: {
    marginLeft: 16,
    marginRight: 16,
    height: 45,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
  },
  inputStylesText1: {
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    borderColor: colors.textBorder,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
  },
  inputStylesTextBigBox: {
    marginLeft: 16,
    marginRight: 16,
    height: 95,
    borderColor: colors.textBorder,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
    fontFamily: fonts.Regular,
  },

  dobText: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    // borderBottomColor: colors.bottomBorder,
    color: colors.black,
    textAlign: 'left',
    fontSize: sizes.small,
  },
  dateInput: {
    marginLeft: 10,
    marginRight: 0,
    borderWidth: 0,
    alignItems: 'flex-start',
    color: colors.black,
    fontSize: sizes.small,
  },
  placeholderText: {
    marginLeft: Platform.OS == 'ios' ? 0 : 4,
    marginRight: 0,
    borderWidth: 0,
    alignItems: 'flex-start',
    fontSize: sizes.small,
    // color: Platform.OS == 'ios' ? "#c4c4c6" : "#9e9e9e"
  },
  dateText: {
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
    alignItems: 'flex-start',
    color: colors.black,
    fontSize: sizes.regular,
  },
  dateTextImage: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: width - 65,
    resizeMode: 'contain',
  },
  dateTextImage1: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: width - 70,
    resizeMode: 'contain',
  },
  dropImage: {
    position: 'absolute',
    marginTop: 15,
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginLeft: width - 60,
  },

  inputIOS: {
    width: width - 90,
    color: colors.black,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop: 5,
    fontSize: sizes.regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  inputAndroid: {
    // width: width - 90,
    color: colors.black,
    marginLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    fontSize: sizes.regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },

  printButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 40,
    width: '100%',
    marginTop: 0,
    alignSelf: 'center',
    backgroundColor: colors.main,
  },
  printText: {
    color: colors.white,
    fontSize: 15,
  },
});
