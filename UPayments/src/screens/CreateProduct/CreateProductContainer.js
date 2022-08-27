import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CreateProductComponent from './CreateProductComponent';
import { ShowAlert } from '../../utils/theme';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
const CreateProductContainer = memo(props => {
  const { navigation, apigetCategoryList } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [sort, setSort] = useState([
   
  ])
  const [screenData, setScreenData] = useState({
    productDetail: {},
    
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    callCategoryListAPI()

  }, []);

  React.useLayoutEffect(() => {
    navigation.titleString = 'Create';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });
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

  return (
    <CreateProductComponent
      props={props}
      isLoading={isLoading}
      screenData={screenData}
      sort={sort}

    />
  );
});

CreateProductContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({});
const mapDispatchToProps = dispatch => ({
  apigetCategoryList: () => dispatch(userActions.apigetCategoryList()),

});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer);
