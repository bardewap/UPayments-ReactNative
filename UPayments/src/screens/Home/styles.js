import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, sizes } from '../../utils/theme';
const WIDTH = Dimensions.get('window').width
const numColumns = 2
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  emptyContainerText: {
    textAlign: 'center',
    fontSize: sizes.regularLarge,
    color: colors.main_color,
    marginTop: '50%'
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 15
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  item1: {
    // flex: 1,
    width: 150,
    height: 50,
    margin:10,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.gray,
    borderRadius:20

  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  textBack: {
    backgroundColor: colors.black,
    flex: 1,
    borderRadius: 8,
  },
  textName: {
    color: colors.white,
    fontSize: sizes.smalls,
    padding: 5
  },
  textPrice: {
    color: colors.white,
    fontSize: sizes.smalls,
    padding: 5
  },
  imageBg: {
    padding: 15
  },
  categoryName: {
    color: colors.black,
    fontSize: sizes.regularLarge,
    // flex:1
  },
});
