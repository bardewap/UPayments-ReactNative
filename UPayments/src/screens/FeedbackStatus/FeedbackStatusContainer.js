import React, {useState} from 'react';
import {connect} from 'react-redux';
import FeedbackStatusComponent from './FeedbackStatusComponent';
import {ShowAlert, Navigation} from '../../utils/theme';

const FeedbackStatusContainer = props => {
  const {navigation} = props;

  const [screenData, setScreenData] = useState({
    searchText: '',
  });
  const setScreenDataTemp = item => {
    setScreenData(item);
  };
  const checkStatusButtonPress = () => {
    ShowAlert('checkStatusButtonPress');
  };
  React.useLayoutEffect(() => {
    navigation.titleString = 'Feedback status';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });
  return (
    <FeedbackStatusComponent
      props={props}
      screenData={screenData}
      setScreenDataTemp={setScreenDataTemp}
      checkStatusButtonPress={checkStatusButtonPress}
    />
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedbackStatusContainer);
