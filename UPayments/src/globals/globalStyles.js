import {setGlobalStyles} from 'react-native-floating-label-input';
import colors from './colors';
import fonts from './fonts';

setGlobalStyles.containerStyles = {
  backgroundColor: colors.placeholder,
  // any styles you want to generalize to your input container
  borderWidth: 1,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
  borderRadius: 8,
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 40,
  borderColor: colors.placeholder,
  height: 55,
};

setGlobalStyles.labelStyles = {
  color: colors.redColor,
  backgroundColor: '#fff',
  paddingHorizontal: 5,
  // any styles you want to generalize to your floating label
};
setGlobalStyles.inputStyles = {
  paddingHorizontal: 10,
  keyboardType: 'default',
  contextMenuHidden: true,
  color: colors.black,
  marginTop: 5, // any styles you want to generalize to your input
};

setGlobalStyles.customLabelStyles = {
  colorFocused: colors.placeholder,
  fontSizeFocused: 12,
  // any styles you want to generalize to your input
};
