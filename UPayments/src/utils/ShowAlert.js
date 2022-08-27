import {Platform, Alert} from 'react-native';
export default ShowAlert = props => {
  setTimeout(() => {
    Alert.alert(props, null, [{text: 'OK', onPress: () => {}}]);
  }, 100);
};
export const isIOS = () => {
  var result = false;
  Platform.OS === 'ios' ? (result = true) : (result = false);
  return result;
};
