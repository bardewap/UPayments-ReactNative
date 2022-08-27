import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  sub_container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  sub_container1: {
    flex: 1,
    alignItems: 'center',
  },

  HedingText: {
    alignSelf: 'center',
    fontSize: 25,
    color: colors.white,
    marginTop: 35,
  },

  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  background: {
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 213,
    width: 318,
    resizeMode: 'contain',
    marginTop: 80,
  },

  inputText: {
    fontSize: sizes.regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 58,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  logintext: {
    color: colors.white,
    fontSize: sizes.regular,
  },

  login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 62,
    marginBottom: 30,
    margin: 20,
    borderRadius: 4,
    width: 360,
    borderRadius: 40,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    alignSelf: 'center',
    backgroundColor: colors.button_color,
  },
  text_forgot: {
    alignSelf: 'center',
    fontSize: sizes.regular,
    color: colors.white,
    marginTop: 15,
  },

  text_newStaff: {
    alignSelf: 'center',
    fontSize: sizes.regular,
    color: colors.white,
  },

  text_regular_14: {
    color: colors.hint_color,
    fontSize: sizes.medium,
    // fontFamily:fonts.Bold
  },
  text_bold_14: {
    color: colors.text_color_semi_black,
    fontSize: sizes.medium,
    // fontFamily:fonts.Bold
  },
  eyeImageBack: {
    marginTop: 30,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  eyeImage: {
    height: 20,
    width: 20,
    marginRight: 30,
    resizeMode: 'contain',
  },
  text_regular_141: {
    color: colors.placeholder,
    fontSize: sizes.small,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: 50,
  },
});
