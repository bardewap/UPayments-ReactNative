import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White_FFFFFF,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: colors.White_FFFFFF,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.White_FFFFFF,
  },
  emptyContainer1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.White_FFFFFF,
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
    height: 128,
    width: 105,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonBackStyle1: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
    alignSelf: 'center',
    width: 154,
    marginTop: 50,
    backgroundColor: '#E8F3FD',
    fontSize: sizes.Regular,
    borderColor: '#707070',
    borderWidth: 0.5,
  },
  buttonTextStyle1: {
    color: '#8EC8F6',
    fontSize: sizes.Regular,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
});
