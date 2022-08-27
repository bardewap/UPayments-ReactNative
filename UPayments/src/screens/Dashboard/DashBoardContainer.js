import React, {memo, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DashBoardComponent from './DashBoardComponent';
import * as userActions from '../../redux/actions/userActions';
import {store} from '../../redux/actions/store';
import {Navigation} from '../../utils/theme';
import {ShowAlert, constants} from '../../utils/theme';
import {Linking} from 'react-native';
import * as commonAction from '../../redux/actions/CommonAction';

const DashBoardContainer = memo(props => {
  const {navigation, apiClientsList, storeSignature} = props;
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState('');
  const [totalClient, setTotalClient] = useState('');
  const [source, setSource] = React.useState({uri: '', cache: true});

  React.useLayoutEffect(() => {
    navigation.titleString = 'Dashboard';
    Navigation.setNavigation3(navigation);
    navigation.menuButtonPress = () => {
      navigation.openDrawer();
    };
  });

  const customercase = item => {
    navigation.navigate('CaseListContainer', {data: {item: item}});
  };
  const serviceAgreement = item => {
    var sigatureData = {};
    var Temp = {sigatureData};
    storeSignature(Temp);
    navigation.navigate('ServiceAgreementContainer', {
      data: {item: item, screen: 'dashboard'},
    });
  };

  const downloadAgreement = item => {
    navigation.navigate('DownloadAgreementContainer', {data: {item: item}});

    //   if(source.uri==""){
    //     ShowAlert("No Serive Agreement Available")
    //   }else{
    //     setSource({ uri: constants.baseUrl + 'service_agreement_pdf' + '/' + 'service-agreement-' +item?.service_agreement[0]?.id + '' + '.pdf', cache: true })
    //     Linking.openURL(source.uri);
    //  }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTotalClient('');
      setList([]);
      setSearch('');
      setPageNo(1);
      callClientListApi(1, '');
    });
    return unsubscribe;
  }, [navigation]);

  const pullToRefresh = () => {
    setTotalClient('');
    setList([]);
    setSearch('');
    setPageNo(1);
    callClientListApi(1, '');
  };

  function getUnique(arr, index) {
    const unique = arr
      .map(e => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }
  const callClientListApi = async (pageNo1, searchData1) => {
    if (isLoading) {
      return;
    }
    const {user_data} = store.getState().userSession;
    var request = {
      user_id: user_data.id,
      user_type_id: user_data.user_type_id,
      name: searchData1,
      page_no: pageNo1,
      per_page: 10,
    };
    if (searchData1 == '') {
      setLoading(true);
    }
    console.log('apiClientsList Request ' + JSON.stringify(request));
    await apiClientsList(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log('apiClientsList Response ' + JSON.stringify(data_response));
        if (data_response?.status) {
          setLoading(false);
          setTotalClient(data_response.total_clients);
          if (pageNo1 == 1) {
            var temp = [...data_response?.result];
            setList(temp);
          } else {
            var temp = [...list, ...data_response?.result];
            setList(getUnique(temp, 'id'));
          }
        } else {
          setLoading(false);
          ShowAlert(data_response.message);
        }
      })
      .catch(error => {
        console.log(error);
        ShowAlert(String(error.error));
        setLoading(false);
      });
  };

  const callClientListApiCall = () => {
    setPageNo(pageNo + 1);
    callClientListApi(pageNo + 1, search);
  };
  const searchData = value => {
    setSearch(value);
    setPageNo(1);
    callClientListApi(1, value);
  };
  const addCaseAction = item => {
    navigation.navigate('AddCaseContainer', {data: {item: item}});
  };
  const editClient = item => {
    navigation.navigate('EditClientContainer', {data: {item: item}});
  };
  return (
    <DashBoardComponent
      list={list}
      props={props}
      addCaseAction={addCaseAction}
      editClient={editClient}
      isLoading={isLoading}
      customercase={customercase}
      callClientListApi={callClientListApi}
      searchData={searchData}
      search={search}
      totalClient={totalClient}
      serviceAgreement={serviceAgreement}
      callClientListApiCall={callClientListApiCall}
      pullToRefresh={pullToRefresh}
      downloadAgreement={downloadAgreement}
    />
  );
});

DashBoardContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => ({
  apiClientsList: params => dispatch(userActions.apiClientsList(params)),
  storeSignature: params => dispatch(commonAction.storeSignature(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
