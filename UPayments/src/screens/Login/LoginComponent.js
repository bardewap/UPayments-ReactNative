import React, {memo, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {globalStyles, Images} from '../../utils/theme';
import {colors, constants} from '../../utils/theme';
import Loader from '../../components/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const LoginComponent = memo(props => {
  const [isSecureConfirmPassword, setIsSecureConfirmPassword] = useState(true);
  return (
    <View safe style={styles.container}>
      <Loader loading={props.isLoading} />
      <ImageBackground style={styles.background} source={Images.sigIn_bg} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.keyBordContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <Image source={Images.signIn_icon} style={styles.logo} />
          <Text style={styles.HedingText}>Sign In</Text>
          <View style={{marginTop: 20}}>
            <TextInput
              onChangeText={value => {
                props.setEmailIdData(value);
              }}
              placeholder="Email address"
              value={props.emailId}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="email-address"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          {props.emailIdV != '' ? (
            <Text style={globalStyles.labelStylesTextErrorLogin}>
              {props.emailIdV}
            </Text>
          ) : null}
          <View>
            <TextInput
              onChangeText={value => {
                props.setPassWordData(value);
              }}
              placeholder="Password"
              contextMenuHidden={true}
              maxLength={50}
              value={props.password}
              secureTextEntry={isSecureConfirmPassword}
              autoCapitalize="none"
              keyboardType="default"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
            <View style={styles.eyeImageBack}>
              <TouchableOpacity
                onPress={() => {
                  setIsSecureConfirmPassword(!isSecureConfirmPassword);
                }}>
                <Image
                  style={styles.eyeImage}
                  source={isSecureConfirmPassword ? Images.hide : Images.eye}
                />
              </TouchableOpacity>
            </View>
          </View>
          {props.passwordV != '' ? (
            <Text style={globalStyles.labelStylesTextErrorLogin}>
              {props.passwordV}
            </Text>
          ) : null}
          <TouchableOpacity
            onPress={() => {
              props.forgotPasswordButtonPress();
            }}>
            <Text style={styles.text_forgot}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.signInButtonPress();
            }}
            style={styles.login}>
            <Text style={styles.logintext}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.newStaffButtonPress();
            }}>
            <Text style={styles.text_newStaff}>Join as a new staff</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.text_regular_141}>{constants.appVersion}</Text>
      </KeyboardAwareScrollView>
    </View>
  );
});
export default LoginComponent;
