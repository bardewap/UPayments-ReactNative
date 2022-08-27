import React, {memo, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import IntroductionComponent from './IntroductionComponent';
import {Navigation} from '../../utils/theme';
import {BackHandler} from 'react-native';
import * as userActions from '../../redux/actions/userActions';


const IntroductionContainer = memo(props => {
  const {navigation, apiTermsCondition, userData, clearUserSession,apiMasterList} = props;
  const [isLoading, setLoading] = React.useState(false);
  const [source, setSource] = React.useState(
  );
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    function handleBackButton() {
      navigation.goBack();
      return true;
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );
    return () => backHandler.remove();
  }, [navigation]);


 
  const onLoadEnd = () => {
    setLoading(false);
  };
  React.useLayoutEffect(() => {
    navigation.titleString = 'Introduction';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });
  return (
    <IntroductionComponent
      props={props}
      isLoading={isLoading}
      source={source}
      onLoadEnd={onLoadEnd}
    />
  );
});

const mapStateToProps = ({userSession}) => ({
});
const mapDispatchToProps = dispatch => ({
  clearUserSession: () => dispatch(Actions.clearUserSession()),

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IntroductionContainer);
