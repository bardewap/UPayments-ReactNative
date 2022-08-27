import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.screenBackground,
  },
  emptyContainer1: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  emptyContainerTextBold: {
    textAlign: 'center',
    fontSize: sizes.ExtarLarge,
    color: colors.TextColor_212121,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  emptyContainerText: {
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.black,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    lineHeight: 25,
  },
  emptyCartStyle: {
    height: 92,
    width: 82,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 70,
  },
  buttonBackStyle1: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 4,
    height: 50,
    alignSelf: 'center',
    width: 213,
    marginTop: 57,
    backgroundColor: colors.main,
    fontSize: sizes.Regular,
  },
  buttonTextStyle1: {
    color: colors.white,
    fontSize: sizes.Regular,
    alignSelf: 'center',
  },

  HedingText: {
    fontSize: sizes.size_14,
    color: colors.black,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  chipSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },

  inputText: {
    fontSize: sizes.regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    justifyContent: 'center',
    marginLeft: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
  itemBackStyle: {
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    paddingTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  ImageStyle: {
    height: 41,
    width: 41,
    //  resizeMode: 'contain',
  },
  textMain: {
    fontSize: sizes.small,
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
});
