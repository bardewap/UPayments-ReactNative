import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SplashComponent from './SplashComponent';
import SplashScreen from 'react-native-splash-screen';
import {store} from '../../redux/actions/store';

const SplashContainer = props => {
  useEffect(() => {
    SplashScreen.hide();
    const {navigation} = props;
    var common = store.getState().common;
    // if (common.isUserLoggedin) {
      navigation.navigate('Home');
    // } else {
      // if (common.isUserShowDemo) {
      //   navigation.navigate('Demo')
      // } else {
      // navigation.navigate('Demo');
      // }
    // }
  }, []);
  return <SplashComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
