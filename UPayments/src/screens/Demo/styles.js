import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container_slide: {
    flex: 1,
    backgroundColor: colors.white,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  DescText: {
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 50,
    width: '100%',
    fontSize: sizes.regularLarge,
    color: colors.black,
    textAlign: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    resizeMode: 'contain',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 400,
  },
  login: {
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    alignSelf: 'stretch',
    borderColor: colors.main_color,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  logintext: {
    color: colors.main_color,
    fontSize: sizes.regularLarge,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSkip: {
    flex: 1,
    backgroundColor: colors.light_main_color,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNext: {
    flex: 1,
    backgroundColor: colors.main_color,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.regular,
  },
});
