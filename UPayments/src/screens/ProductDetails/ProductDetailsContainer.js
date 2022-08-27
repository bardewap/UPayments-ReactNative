import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProductDetailsComponent from './ProductDetailsComponent';
import { ShowAlert } from '../../utils/theme';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
const ProductDetailsContainer = memo(props => {
  const { navigation, apiProductDetail } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [productList, setProductList] = useState([]);
  const { data } = props.route.params;
  const [screenData, setScreenData] = useState({
    productDetail: {},
    

    
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    apiProductDetailCall()
  }, []);

  React.useLayoutEffect(() => {
    navigation.titleString = 'Home';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const introductionPress = () => {
    navigation.navigate('IntroductionContainer');
  };

  const searchPress = () => {
    callComplaintSearchAPI(search)
  };

  const complaintPress = () => {
    navigation.navigate('NewComplaintContainer');
  };

  const apiProductDetailCall = async () => {

    var productId =data.item._id
    setLoading(true);
    await apiProductDetail(productId)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiProductDetail Response " + JSON.stringify(data_response));
        if (data_response?.message) {
          setLoading(false);
          setScreenData({ ...screenData, productDetail: data_response?.product });

          
        } else {
          setLoading(false);
          ShowAlert(data_response.message)
        }
      }).catch(error => {
        console.log("apiProductDetail Response " + JSON.stringify(error));
        ShowAlert(String(error.error))
        setLoading(false);
      });
  };



  return (
    <ProductDetailsComponent
      props={props}
      isLoading={isLoading}
      introductionPress={introductionPress}
      complaintPress={complaintPress}
      searchPress={searchPress}
      screenData={screenData}

    />
  );
});

ProductDetailsContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({});
const mapDispatchToProps = dispatch => ({
  apiProductDetail: (params) => dispatch(userActions.apiProductDetail(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
