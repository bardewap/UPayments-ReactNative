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
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 200,
    width:'100%',
    flex:1
  },
  textBack: {
    backgroundColor: colors.black,
    flex:1,
    borderRadius:15,
    marginTop:50,

  },
  textName:{
    color: colors.white,
    fontSize: sizes.regularLarge,
    padding:5,
    fontWeight:'500',
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:20,
  },
  textPrice:{
    color: colors.white,
    fontSize: sizes.smalls,
    padding:5,
    position: 'absolute',
    right: 15,
    marginRight:5,
    marginTop:10,
    marginBottom:20,
    fontWeight:'500',
  },
  textdescription:{
    color: colors.white,
    fontSize: sizes.smalls,
    padding:5,
    position: 'absolute',
    marginRight:5,
    marginLeft:5,
    marginTop:40,

  },
  imageBg:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.gray,
  },
  header:{
    color: colors.black,
    fontSize: sizes.regularLarge,
    padding:5,
    fontWeight:'500',
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:20,
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
  buttonBackStyle1: {
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
    width: 130,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.button_color,
    fontSize: sizes.Regular,
    marginBottom: 30,
    alignSelf: 'center'
  },
  buttonTextStyle1: {
    color: colors.white,
    fontSize: sizes.Regular,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center'
  },
  Text: {
    color: colors.hint_color,
    fontSize: sizes.regular,
    fontFamily: fonts.Regular,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    marginTop:10,
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
});
