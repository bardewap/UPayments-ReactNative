import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { ShowAlert } from '../../utils/theme';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
const HomeContainer = memo(props => {
  const { navigation, apiProductList } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [search, setSearch] = useState('');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    apiProductListCall()
  }, []);

  React.useLayoutEffect(() => {
    navigation.titleString = 'Home';
    Navigation.setNavigation3(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const itemDetailsButtonPress = (item) => {
    navigation.navigate('ProductDetailsContainer',{data:{item:item}});
  };

 
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

  return (
    <HomeComponent
      props={props}
      isLoading={isLoading}
      productList={productList}
      pullToRefresh={pullToRefresh}
      itemDetailsButtonPress={itemDetailsButtonPress}

    />
  );
});

HomeContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({});
const mapDispatchToProps = dispatch => ({
  apiProductList: () => dispatch(userActions.apiProductList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
