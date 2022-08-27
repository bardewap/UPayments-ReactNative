import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import ComplaintSuccessComponent from './ComplaintSuccessComponent';
import {ShowAlert, Navigation} from '../../utils/theme';

const ComplaintSuccessContainer = props => {
  const {navigation} = props;
  const { data } = props.route.params;

  const [screenData, setScreenData] = useState({
    searchText: '',
    complaintNo: '',

  });
  const setScreenDataTemp = item => {
    setScreenData(item);
  };
  const checkStatusButtonPress = () => {
    // navigation.navigate("ComplaintStatusContainer")
    navigation.navigate('HomeContainer');
  };

  React.useLayoutEffect(() => {
    navigation.titleString = 'Success';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  useEffect(() => {
    setData();
  }, []);


  const setData = async () => {
    setScreenData({ ...screenData, complaintNo: data.complaintNo});

  };

  return (
    <ComplaintSuccessComponent
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
)(ComplaintSuccessContainer);
