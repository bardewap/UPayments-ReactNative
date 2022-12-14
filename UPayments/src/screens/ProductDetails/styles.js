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
  }
});
