import React, {useState} from 'react';
import {connect} from 'react-redux';
import FeedbackComponent from './FeedbackComponent';
import {ShowAlert, Navigation} from '../../utils/theme';
import {ValidationMessages} from '../../utils/theme';
import {Validators} from '../../utils/validators';

const FeedbackContainer = props => {
  const {navigation} = props;

  const [screenData, setScreenData] = useState({
    searchText: '',
  });

  const [comment, setComment] = useState('8446398894');
  const [commentV, setCommentV] = useState('');
  const setCommentData = value => {
    setComment(value);
    var commentTemp = '';
    if (Validators.isEmpty(value)) {
      commentTemp = ValidationMessages.InvoiceNumber;
    } else if (!Validators.validEmail(value)) {
      commentTemp = ValidationMessages.InvoiceNumber;
    }
    setCommentV(commentTemp);
  };
  const setScreenDataTemp = item => {
    setScreenData(item);
  };
  const checkStatusButtonPress = () => {
    navigation.navigate('FeedbackStatusContainer');
  };

  const ItemButtonPress = item => {
    ShowAlert(item.title);
  };

  React.useLayoutEffect(() => {
    navigation.titleString = 'Feedback';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });
  return (
    <FeedbackComponent
      props={props}
      screenData={screenData}
      setScreenDataTemp={setScreenDataTemp}
      checkStatusButtonPress={checkStatusButtonPress}
      setCommentData={setCommentData}
      ItemButtonPress={ItemButtonPress}
    />
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);
