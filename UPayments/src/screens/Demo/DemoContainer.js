import React from 'react';
import {connect} from 'react-redux';
import DemoComponent from './DemoComponent';
import * as commonAction from '../../redux/actions/CommonAction';
const DemoContainer = props => {
  const {navigation, setDemoSession} = props;
  const nextButtonPress = () => {
    setDemoSession();
    navigation.navigate('LoginContainer');
  };
  const skipButtonPress = () => {
    setDemoSession();
    navigation.navigate('LoginContainer');
  };
  return (
    <DemoComponent
      props={props}
      nextButtonPress={nextButtonPress}
      skipButtonPress={skipButtonPress}
    />
  );
};
DemoContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setDemoSession: () => dispatch(commonAction.setDemoSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
