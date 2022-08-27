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
    marginLeft: 15,
    marginRight: 15,
  },
  HeadingText: {
    color: colors.black,
    fontSize: sizes.regularLarge,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
