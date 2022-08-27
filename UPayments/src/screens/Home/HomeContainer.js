import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { ShowAlert } from '../../utils/theme';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
const HomeContainer = memo(props => {
  const { navigation, apiProductList,apigetCategoryList } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [search, setSearch] = useState('');
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState([
   
  ])

  const [screenData, setScreenData] = useState({
    eventTime: '',
    eventName: '',
    userVoted:false,
    eventDesc: '',
    commentCount: 0,
    attendessCount: 3,
    message: "Vote for your favorite place",
    summaryLocation: [],
    summarylocationArrayRefresh: true,
    selectedIndex: -1,
    isOwner: false,
    commentList: [],
    commentListRefresh: true,
    seletedUserName: "",
    seletedUserHasVoted: false,
    seletedUserCommentText: "",
    seletedAttendeesLocations: [],
    seletedAttendeesLocationsArrayRefresh: true,
    attendessUserList: [],
    attendessUserIndex: 0,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    apiProductListCall()
    callCategoryListAPI()

  }, []);

  React.useLayoutEffect(() => {
    navigation.titleString = 'Upayments store';
    Navigation.setNavigation3(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const itemDetailsButtonPress = (item) => {
    navigation.navigate('ProductDetailsContainer',{data:{item:item}});
  };

  const getSortResult = (value) => {
   console.log(value)
   
  };


  const clearSorting = () => {
    setCategoryId("")
    callGetAllVendorsAPI(1, "", categoryId, position.latitude, position.longitude)

  };


  const callCategoryListAPI = async () => {
    setLoading(true)
    await apigetCategoryList()
      .then(response => {
        var data_response = response.payload.data;
        console.log("apigetCategoryList Response " + JSON.stringify(data_response));
        if (data_response?.message) {
          // ShowAlert(data_response?.message)
          setSort(data_response?.categories)
          setLoading(false);
        } else {
          setLoading(false);
          ShowAlert(data_response.message)
        }
      }).catch(error => {
        console.log(error);
        ShowAlert(String(error.error))
        setLoading(false);
      });
  }
  const apiProductListCall = async () => {
    setLoading(true);
    await apiProductList()
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiProductList Response " + JSON.stringify(data_response));
        if (data_response?.message) {
          setLoading(false);
          setProductList(data_response?.products)
        } else {
          setLoading(false);
          ShowAlert(data_response.message)
        }
      }).catch(error => {
        console.log("apiProductList Response " + JSON.stringify(error));
        ShowAlert(String(error.error))
        setLoading(false);
      });
  };
  

  const pullToRefresh = () => {
    apiProductListCall()
  }

  const createButtonPress = () => {
    navigation.navigate('CreateProductContainer');

  }

  return (
    <HomeComponent
      props={props}
      isLoading={isLoading}
      productList={productList}
      pullToRefresh={pullToRefresh}
      itemDetailsButtonPress={itemDetailsButtonPress}
      sort={sort}
      getSortResult={getSortResult}
      createButtonPress={createButtonPress}
      screenData={screenData}

    />
  );
});

HomeContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({});
const mapDispatchToProps = dispatch => ({
  apiProductList: () => dispatch(userActions.apiProductList()),
  apigetCategoryList: () => dispatch(userActions.apigetCategoryList()),
  apiProductPost: () => dispatch(userActions.apiProductList()),


});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
