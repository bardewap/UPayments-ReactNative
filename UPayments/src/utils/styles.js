import {StyleSheet} from 'react-native';
import colors from '../globals/colors';
import fonts from '../globals/fonts';
import Images from '../globals/images';
import sizes from '../utils/sizes';
import {StatusBar, Platform} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  containerWithoutBottomLine: {
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: colors.white,
  },
  containerSub: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? 20 : 25,
    height: Platform.OS === 'ios' ? 64 : 73,
  },
  StatusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: '#CD9F41',
  },
  backButton: {
    marginLeft: 25,
    height: 14,
    width: 12,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
  rotetButton: {
    marginRight: 15,
    height: 30,
    width: 30,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
  addButton: {
    height: 14,
    marginLeft: 10,
    width: 14,
    alignItems: 'flex-start',
    resizeMode: 'contain',
    margin: 3,
  },

  logo_filter: {
    marginLeft: 0,
    height: 25,
    width: 50,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },

  notification_Button: {
    height: 14,
    width: 18,
    marginRight: 15,
    resizeMode: 'contain',
  },

  menuButton: {
    marginLeft: 20,
    marginRight: 0,
    height: 25,
    width: 25,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },

  bottomTab: {
    top: 0,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rightButton: {
    marginRight: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  centerView: {
    marginLeft: Platform.OS == 'android' ? sizes.width * 0.09 : 0,
    width: sizes.width,
    justifyContent: 'center',
    width: sizes.width - 200,
  },
  text: {
    // textAlign: 'center',
    // backgroundColor:colors.main,
    // fontSize: 20,
    // color: colors.black,
    // fontFamily: fonts.medium,
    // marginLeft:20,
    // marginRight:10,
    textAlign: 'center',
    width: sizes.width - 200,

    fontSize: sizes.regularLarge,
    color: colors.white,
    // fontFamily: fonts.SemiBold,
  },
  text_left: {
    // textAlign: 'left',
    fontSize: sizes.regularLarge,
    color: colors.black,
    // fontFamily: fonts.Medium,
  },
  textWhite: {
    marginLeft: 20,
    marginRight: 10,
    textAlign: 'center',
    fontSize: sizes.regularLarge,
    color: colors.white,
    // fontFamily: fonts.Medium,
  },

  textBlack: {
    marginLeft: 20,
    marginRight: 10,
    fontSize: sizes.regularLarge,
    color: colors.black,
  },

  textWhite_Title: {
    marginRight: 10,
    textAlign: 'left',
    fontSize: sizes.regularLarge,
    color: colors.white,
  },

  textblack_Title: {
    marginRight: 10,
    textAlign: 'left',
    fontSize: sizes.regularLarge,
    color: colors.hint_color,
  },

  logo_center: {
    height: 19,
    width: 140,
    marginRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.black,
    fontSize: sizes.regular,
    // fontFamily: fonts.Medium,
  },
  sortText: {
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.white,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },
  restText: {
    marginRight: 15,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.sortButton,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },

  resetText: {
    marginRight: 20,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.login_button_color,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },

  rightView: {
    flexDirection: 'row',
    marginRight: 20,
  },
  leftView: {
    flexDirection: 'row',
  },

  filterViewTitle: {
    marginLeft: 15,
    paddingTop: Platform.OS == 'ios' ? 0 : 0,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },

  search_title_View: {
    flex: 1,
    left: 0,
    alignSelf: 'flex-start',
    marginTop: Platform.OS == 'ios' ? 12 : 0,
    marginLeft: Platform.OS == 'ios' ? -90 : 0,
  },

  search_title_View_goal: {
    flex: 1,
    left: 0,
    marginTop: Platform.OS == 'ios' ? 12 : 10,
    marginRight: Platform.OS == 'ios' ? 90 : 0,
  },

  centerView1: {
    flex: 2,
    marginLeft: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: colors.white,
    marginRight: 10,
  },
  filter: {
    marginLeft: 0,
    marginRight: 25,
    width: 16,
    height: 14,
    resizeMode: 'contain',
  },
  watchlist: {
    marginLeft: 0,
    marginRight: 25,
    width: 17,
    height: 12,
    resizeMode: 'contain',
  },

  dropdown_search: {
    marginRight: 5,
    marginLeft: 5,
    width: 10,
    height: 5,
    marginTop: 5,
    resizeMode: 'contain',
  },

  text_right: {
    fontSize: sizes.size_14,
    color: colors.black,
  },
  settingButton: {
    height: 20,
    marginLeft: 10,
    width: 20,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
});
