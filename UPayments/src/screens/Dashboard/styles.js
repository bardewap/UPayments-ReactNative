import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';

const WIDTH = Dimensions.get('window').width;
const numColumns = 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
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
    marginTop: '50%',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: colors.main_color,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },

  item: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
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
  headingText: {
    marginBottom: 50,
    alignSelf: 'center',
    fontSize: 10,
    color: colors.placeholder,
    alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 16,
    margin: 10,
  },

  header: {
    height: 50,
    paddingTop: 20,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10,
    fontSize: sizes.regularLarge,
    color: colors.black,
    fontWeight: 'bold',
  },

  textheader: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: sizes.regularLarge,
    color: colors.black,
  },
  inputTextView: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },

  inputText: {
    // flex:1,
    paddingTop: 10,
    paddingBottom: 10,
    // width:"100%",
    fontSize: sizes.regular,
    // paddingRight: 20,
    textAlign: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },

  descriptionText: {
    fontSize: sizes.small,
    height: 45,
    marginBottom: 10,
    marginStart: 20,

    color: colors.placeholder,
  },
  bottomBorder: {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colors.border1,
  },
  imageStyle: {
    height: 18,
    width: 18,
    justifyContent: 'flex-start',
    marginStart: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },

  imageMenuStyle: {
    height: 35,
    width: 35,
    justifyContent: 'flex-start',
    resizeMode: 'contain',
  },

  imageTop: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },

  container1: {
    backgroundColor: colors.white,
    height: 80,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
  },

  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },

  textClient: {
    alignSelf: 'center',
    fontSize: sizes.regular,
    color: colors.black,
  },

  textInputValue: {
    fontSize: sizes.extaLarge,
    color: colors.main,
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  countContainer: {
    margin: 10,
    marginRight: 20,
  },

  icon_view_container: {
    justifyContent: 'flex-start',
    marginLeft: 20,
  },

  client_text_viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  centerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_service_agreementImage: {
    position: 'absolute',
    width: 90,
    height: 30,
    marginRight: 10,
  },
  searchBackground: {
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: colors.searchTextBack,
    borderRadius: 22.5,
  },

  rectangle_background: {
    resizeMode: 'cover',
    height: 40,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },

  search_ic: {
    height: 20,
    width: 20,
    marginLeft: 20,
    position: 'absolute',
  },

  divider: {
    height: 1,
    marginTop: 10,
    backgroundColor: colors.border1,
  },

  container3: {
    flex: 1,
    flexDirection: 'row',
  },

  container4: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },

  container5: {
    flex: 1,
    marginTop: 10,
  },

  textName: {
    color: colors.black,
    fontSize: sizes.regular,
  },

  activeBack: {
    backgroundColor: '#F4FCE3',
    borderRadius: 20,
    marginRight: 15,
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
    color: '#0ABB87',
  },
  inactiveText: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#F46A6A',
  },
  text_serviceAggImage: {
    height: 20,
    width: 20,
    marginLeft: 10,
    resizeMode: 'contain',
    position: 'absolute',
  },
  text_large: {
    color: colors.placeholder,
    fontSize: sizes.small,
  },
  text_serviceAgg: {
    marginLeft: 30,
    color: colors.main,
    // fontSize: sizes.small,
    fontSize: 8,
  },
  text_serviceAggBack: {
    justifyContent: 'center',
    // padding:10,
    padding: 3,
    paddingRight: 5,
    borderRadius: 10,
    backgroundColor: colors.searchTextBack,
  },

  text_small: {
    color: colors.black,
    fontSize: sizes.small,
  },
});
