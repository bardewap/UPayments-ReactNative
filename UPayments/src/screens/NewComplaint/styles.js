import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fonts, sizes} from '../../utils/theme';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.screenBackground,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.main,
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
    fontSize: sizes.size_14,
    color: colors.black,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 5,
  },

  startTimeText: {
    fontSize: sizes.size_14,
    color: colors.black,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 5,
    alignItems: 'flex-start',
    flex: 1,
  },
  endTimeText: {
    fontSize: sizes.size_14,
    color: colors.black,
    marginTop: 15,
    marginBottom: 5,
    alignItems: 'flex-end',
    flex: 1,
  },

  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 47,
    width: 38,
    marginTop: 10,
    resizeMode: 'contain',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 120,
    width: 200,
    margin: 10,
    resizeMode: 'contain',
  },

  inputText: {
    fontSize: sizes.regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    justifyContent: 'center',
    marginLeft: 15,
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
    alignSelf: 'center',
    backgroundColor: colors.button_color,
  },

  searchSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    height: 58,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  timeSection: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    borderRadius: 4,
    // paddingLeft: 20,
    // paddingRight: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  searchSection1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    paddingRight: 20,
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 58,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 50,
  },
  chipSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    // borderWidth: 1,
    height: 80,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  list: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
  },
  ic_client_group: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 170,
    width: WIDTH - 40,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.button_color,
    height: 40,
    width: 120,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: sizes.medium,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: sizes.regularLarge,
  },
  tick: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 90,
    width: 90,
    resizeMode: 'contain',
    marginTop: -75,
  },
  NextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 60,
    width: '100%',
    marginTop: 0,
    alignSelf: 'center',
    backgroundColor: colors.main_color,
  },

  submitText: {
    color: colors.white,
    fontSize: sizes.regularLarge,
  },
  chip: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 102,
    height: 35,
    borderRadius: 4,
    borderColor: '#8EC8F6',
  },
  chipText: {
    color: colors.button_color,
    fontSize: sizes.regular,
  },

  chipText1: {
    color: colors.black,
    fontSize: sizes.regular,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.divider,
    // margin:10,
  },
  activeBack: {
    borderRadius: 20,
    backgroundColor: '#3FD27A',
    marginRight: 10,
    borderWidth: 1,
    margin: 10,
    width: 102,
    height: 35,
  },
  inactiveBack: {
    backgroundColor: '#3FD27A',
    borderRadius: 20,
    marginRight: 10,
  },
  activeText: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    color: colors.black,
    fontSize: sizes.small,
  },
  alphabetContainer: {
    width: 24,
    height: 24,
    marginLeft: 14,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  alphabetContainerSelected: {
    width: 24,
    height: 24,
    marginLeft: 14,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  radioButtonIcon: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: colors.button_color,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon1: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: colors.button_color,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  radioButtonIconInnerIcon1: {
    height: 25,
    width: 25,
    backgroundColor: colors.button_color,
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  radioButtonText: {
    color: colors.black,
    fontSize: sizes.regular,
  },
  mainContainer: {
    height: 30,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  background: {
    height: 147,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    resizeMode: 'contain',
  },

  buttonBackStyle1: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 4,
    height: 45,
    alignSelf: 'center',
    width: 209,
    backgroundColor: colors.light_blue,
    fontSize: sizes.Regular,
  },
  buttonTextStyle1: {
    color: colors.blue_text,
    fontSize: sizes.size_14,
    alignSelf: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
  chipsContainer: {
    flex: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  chipsStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.blue_text,
  },
  chipsStylepressed: {
    backgroundColor: colors.blue_text,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.light_blue,
  },
  chipHeadingTextStyle: {
    color: colors.TextColor_212121,
    fontSize: sizes.Regular,
    marginLeft: 0,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 15,
    textAlign: 'left',
  },
  chipsTextStyle: {
    color: colors.blue_text,
    fontSize: sizes.size_14,
    marginTop: 8,
  },
  chipsTextStylePressed: {
    color: colors.white,
    fontSize: sizes.size_14,
    marginTop: 8,
  },
});