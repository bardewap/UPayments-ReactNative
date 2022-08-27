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

  item: {
    padding: 25,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 35,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    // height: 92,
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  container3: {
    flex: 1,
  },
  textName: {
    color: colors.black,
    fontSize: sizes.medium,
  },
  complaintNumberText: {
    color: colors.black,
    fontSize: sizes.medium,
  },
  activeBack: {
    backgroundColor: '#3FD27A',
    borderRadius: 20,
    marginRight: 5,
  },
  inactiveBack: {
    backgroundColor: '#FFE3E3',
    borderRadius: 20,
    marginRight: 15,
  },
  activeText: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    color: colors.black,
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
});
