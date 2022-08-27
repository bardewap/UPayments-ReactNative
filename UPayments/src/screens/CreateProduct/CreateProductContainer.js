import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CreateProductComponent from './CreateProductComponent';
import { ShowAlert } from '../../utils/theme';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
import { Validators } from '../../utils/validators';

const CreateProductContainer = memo(props => {
  const { navigation, apigetCategoryList,apiProductPost } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [sort, setSort] = useState([
   
  ])
  const [screenData, setScreenData] = useState({
    productDetail: {},
    
  });
  const [category, setCategory] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productTitleV, setProductTitleV] = useState("");
  const setProductData = (value) => {
    setProductTitle(value)
    var productTitleTemp = ""
    if (Validators.isEmpty(value)) {
      productTitleTemp = ValidationMessages.productTitleTemp
    }
    setProductTitleV(productTitleTemp)
  }

  const [price, setPrice] = useState("");
  const [priceV, setPriceV] = useState("");
  const setPriceData = (value) => {
    setPrice(value)
    var priceTemp = ""
    if (Validators.isEmpty(value)) {
      priceTemp = ValidationMessages.priceTemp
    }
    setPriceV(priceTemp)
  }

  const [description, setDescription] = useState("");
  const [descriptionv, setDescriptionV] = useState("");
  const setDescriptionData = (value) => {
    setDescription(value)
    var descriptionTemp = ""
    if (Validators.isEmpty(value)) {
      descriptionTemp = ValidationMessages.descriptionTemp
    }
    setDescriptionV(descriptionTemp)
  }


  const [imageLink, setImageLink] = useState("");
  const [imageLinkV, setImageLinkV] = useState("");
  const setImageData = (value) => {
    setImageLink(value)
    var imageTemp = ""
    if (Validators.isEmpty(value)) {
      imageTemp = ValidationMessages.imageTemp
    }
    setImageLinkV(imageTemp)
  }

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

  const categoryPress= (item) => {
    setCategory(item.name)
    console.log(item.name)
    
   };

  const addButtonPress = () => {
    addProduct()
  }



  const addProduct = async (userId) => {
    var request = {
      "Name": productTitle,
      "Price": price,
      "Category": category,
      "Description": description,
      "Avatar ": "https://picsum.photos/200",
      "DeveloperEmail": "pradeep.bardewa@gmail.com",
    }
    console.log("apiProductPost Request " + JSON.stringify(request));
    setLoading(true)
    await apiProductPost(request, userId)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiProductPost Response" + JSON.stringify(data_response));
        if (data_response?.message) {
          ShowAlert(data_response?.message)
          setLoading(false);
        } else {
          setLoading(false);
          ShowAlert(data_response.message)

        }
      }).catch(error => {
        console.log(error);
        // ShowAlert(String(error.error.data))
        setLoading(false);

      });
  }

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
      setProductData={setProductData}
      productTitle={productTitle}
      setPriceData={setPriceData}
      price={price}
      setDescriptionData={setDescriptionData}
      description={description}
      setImageData={setImageData}
      imageLink={imageLink}
      addButtonPress={addButtonPress}
      categoryPress={categoryPress}

    />
  );
});

CreateProductContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({});
const mapDispatchToProps = dispatch => ({
  apigetCategoryList: () => dispatch(userActions.apigetCategoryList()),
  apiProductPost: () => dispatch(userActions.apiProductPost()),


});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer);
