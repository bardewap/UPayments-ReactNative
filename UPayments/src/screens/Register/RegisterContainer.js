import React, {memo, useState, useEffect} from 'react';
import {ValidationMessages} from '../../utils/theme';
import {Validators} from '../../utils/validators';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as commonAction from '../../redux/actions/CommonAction';
import {store} from '../../redux/actions/store';
import RegisterComponent from './RegisterComponent';
import {ShowAlert, Navigation} from '../../utils/theme';
const RegisterContainer = memo(props => {
  const {navigation, apiUserRegister} = props;
  const [isLoading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [nameV, setNameV] = useState('');
  const setNameData = value => {
    setName(value);
    var nameTemp = '';
    if (Validators.isEmpty(value)) {
      nameTemp = ValidationMessages.registerNameE;
    }
    setNameV(nameTemp);
  };
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

  const [number, setNumber] = useState('');
  const [numberV, setNumberV] = useState('');
  const setNumberData = value => {
    setNumber(value);
    var numberTemp = '';
    if (Validators.isEmpty(value)) {
      numberTemp = ValidationMessages.registerNumberV;
    }
    setNumberV(numberTemp);
  };

  React.useLayoutEffect(() => {
    Navigation.setNavigation9(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const registerButtonPress = () => {
    if (checkValidation()) {
      userRegister();
    }
  };

  const forgotPasswordButtonPress = () => {
    navigation.navigate('ForgotPasswordContainer');
  };

  const newStaffButtonPress = () => {
    ShowAlert('newStaffButtonPress');
  };
  const checkValidation = () => {
    var emailTemp = '';
    var nameTemp = '';
    var numberTemp = '';

    if (Validators.isEmpty(emailId)) {
      emailTemp = ValidationMessages.registerEmailE;
    } else if (!Validators.validEmail(emailId)) {
      emailTemp = ValidationMessages.registerEmailV;
    }
    if (Validators.isEmpty(name)) {
      nameTemp = ValidationMessages.registerNameE;
    }
    if (Validators.isEmpty(number)) {
      numberTemp = ValidationMessages.registerNumberV;
    }
    setEmailIdV(emailTemp);
    setNameV(nameTemp);
    setNumberV(numberTemp);

    if (emailTemp == '' && nameTemp == '' && numberTemp == '') {
      return true;
    } else {
      return false;
    }
  };

  const cancelButtonPress = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
  };
  const userRegister = async () => {
    var request = {
      email: emailId,
      name: name,
      phoneNumber: number,
    };
    console.log('apiUserRegister Request ' + JSON.stringify(request));
    setLoading(true);
    await apiUserRegister(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log(
          'apiUserRegister Response ' + JSON.stringify(data_response),
        );
        if (data_response?.status) {
          setLoading(false);
          setModalVisible(!modalVisible);
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
    <RegisterComponent
      isLoading={isLoading}
      props={props}
      registerButtonPress={registerButtonPress}
      forgotPasswordButtonPress={forgotPasswordButtonPress}
      newStaffButtonPress={newStaffButtonPress}
      setNameData={setNameData}
      name={name}
      nameV={nameV}
      setEmailIdData={setEmailIdData}
      emailId={emailId}
      emailIdV={emailIdV}
      setNumberData={setNumberData}
      number={number}
      numberV={numberV}
      modalVisible={modalVisible}
      cancelButtonPress={cancelButtonPress}
    />
  );
});

RegisterContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  apiUserRegister: params => dispatch(userActions.apiUserRegister(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
