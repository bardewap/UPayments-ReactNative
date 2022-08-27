import React, {useState} from 'react';
import {connect} from 'react-redux';
import ComplaintStatusComponent from './ComplaintStatusComponent';
import {ShowAlert, Navigation} from '../../utils/theme';

const ComplaintStatusContainer = props => {
  const {navigation,apiComplaintStatus} = props;
  const { data } = props.route.params;
  const [screenData, setScreenData] = useState({
    searchText: '',
  });
  const setScreenDataTemp = item => {
    setScreenData(item);
  };
  const checkStatusButtonPress = () => {
    navigation.navigate('FeedbackContainer');
  };
  React.useLayoutEffect(() => {
    navigation.titleString = 'Complaint status';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  // useEffect(() => {
  //   callComplaintStatusApi()
  // }, []);


  const callComplaintStatusApi = async (search) => {
    var request = {
      "id": 4 
   }
    console.log("apiComplaintStatus Request " + JSON.stringify(request));
    setLoading(true)
    await apiComplaintStatus(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiComplaintStatus Response " + JSON.stringify(data_response));
        if (data_response?.Status) {
          setLoading(false);
            ShowAlert(data_response?.Message)
          // navigation.navigate('ComplaintStatusContainer');
        } else {
          setLoading(false);
          ShowAlert(data_response.Message)
        }
      }).catch(error => {
        console.log(error);
        // ShowAlert(String(error.error.data))
        setLoading(false);
      });
  }
  return (
    <ComplaintStatusComponent
      props={props}
      screenData={screenData}
      setScreenDataTemp={setScreenDataTemp}
      checkStatusButtonPress={checkStatusButtonPress}
      data={data}
    />
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  apiComplaintStatus: (params) => dispatch(userActions.apiComplaintStatus(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplaintStatusContainer);
