import React, {memo, useState, useEffect} from 'react';
import {ValidationMessages} from '../../utils/theme';
import {Validators} from '../../utils/validators';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as commonAction from '../../redux/actions/CommonAction';
import {store} from '../../redux/actions/store';
import LoginComponent from './LoginComponent';
import {ShowAlert} from '../../utils/theme';
const LoginContainer = memo(props => {
  const {navigation, apiUsersUserLogin, setUserSession, savePass} = props;
  const [isLoading, setLoading] = React.useState(false);
  // useEffect(() => {
  //   var user_email = store.getState().common.user_email
  //   var user_password = store.getState().common.user_password
  //   if (user_email != "" && user_password != "") {
  //     setEmailId(user_email)
  //     setPassword(user_password)
  //   }
  // }, []);
  const [emailId, setEmailId] = useState('');
  const [emailIdV, setEmailIdV] = useState('');
  const setEmailIdData = value => {
    setEmailId(value);
    var emailTemp = '';
    if (Validators.isEmpty(value)) {
      emailTemp = ValidationMessages.login_emailE;
    } else if (!Validators.validEmail(value)) {
      emailTemp = ValidationMessages.login_emailV;
    }
    setEmailIdV(emailTemp);
  };

  const [password, setPassword] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const setPassWordData = value => {
    setPassword(value);
    var passwordTemp = '';
    if (Validators.isEmpty(value)) {
      passwordTemp = ValidationMessages.login_passwordE;
    }
    setPasswordV(passwordTemp);
  };
  const signInButtonPress = () => {
    // if (checkValidation()) {
    //   userLogin()
    // }
    navigation.navigate('Home');
  };
  const forgotPasswordButtonPress = () => {
    navigation.navigate('ForgotPasswordContainer');
  };
  const newStaffButtonPress = () => {
    navigation.navigate('RegisterContainer');
  };

  const checkValidation = () => {
    var emailTemp = '';
    var passwordTemp = '';
    if (Validators.isEmpty(emailId)) {
      emailTemp = ValidationMessages.login_emailE;
    } else if (!Validators.validEmail(emailId)) {
      emailTemp = ValidationMessages.login_emailV;
    }
    if (Validators.isEmpty(password)) {
      passwordTemp = ValidationMessages.login_passwordE;
    }
    setEmailIdV(emailTemp);
    setPasswordV(passwordTemp);
    if (emailTemp == '' && passwordTemp == '') {
      return true;
    } else {
      return false;
    }
  };
  const userLogin = async () => {
    var request = {
      email: emailId.toLowerCase(),
      password: password,
    };
    console.log('apiUsersUserLogin Request ' + JSON.stringify(request));
    setLoading(true);
    await apiUsersUserLogin(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log(
          'apiUsersUserLogin Response' + JSON.stringify(data_response),
        );
        if (data_response?.status) {
          ShowAlert(data_response?.message);
          setLoading(false);
          console.log(data_response?.data[0]?.role);
          if (data_response?.data[0]?.role == 'STAFF') {
            setUserSession();
            setLoading(false);
            var request = {
              user_email: emailId,
              user_password: password,
            };
            savePass(request);
            navigation.navigate('Home');
          } else {
            setLoading(false);
            ShowAlert(ValidationMessages.notStaff);
          }
        } else {
          setLoading(false);
          ShowAlert(data_response.message);
        }
      })
      .catch(error => {
        console.log(error);
        // ShowAlert(String(error.error.data))
        setLoading(false);
      });
  };
  return (
    <LoginComponent
      isLoading={isLoading}
      props={props}
      signInButtonPress={signInButtonPress}
      forgotPasswordButtonPress={forgotPasswordButtonPress}
      newStaffButtonPress={newStaffButtonPress}
      setEmailIdData={setEmailIdData}
      emailId={emailId}
      emailIdV={emailIdV}
      setPassWordData={setPassWordData}
      password={password}
      passwordV={passwordV}
    />
  );
});

LoginContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  apiUsersUserLogin: params => dispatch(userActions.apiUsersUserLogin(params)),
  savePass: params => dispatch(commonAction.savePass(params)),
  setUserSession: () => dispatch(commonAction.setUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
