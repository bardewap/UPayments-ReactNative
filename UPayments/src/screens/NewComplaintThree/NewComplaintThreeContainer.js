import React, { memo, useState, useEffect } from 'react';
import { ValidationMessages } from '../../utils/theme';
import { Platform, PermissionsAndroid } from 'react-native';
import { Validators } from '../../utils/validators';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as commonAction from '../../redux/actions/CommonAction';
import { store } from '../../redux/actions/store';
import NewComplaintThreeComponent from './NewComplaintThreeComponent';
import { ShowAlert, Navigation } from '../../utils/theme';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';


const NewComplaintThreeContainer = memo(props => {
  const { navigation, apiCreateComplaint } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [filePath, setFilePath] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [position, setPosition] = useState(2);
  const [chipData, setChipData] = useState([]);
  const [email, setEmail] = useState('');
  const { data } = props.route.params;
  const [emailV, setEmailV] = useState('');
  const setEmailData = value => {
    setEmail(value);
    var emailTemp1 = '';
    if (Validators.isEmpty(value)) {
      emailTemp1 = ValidationMessages.login_emailE;
    } else if (!Validators.validEmail(value)) {
      emailTemp1 = ValidationMessages.login_emailV;
    }
    setEmailV(emailTemp1);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberV, setPhoneNumberV] = useState('');
  const setMobileData = value => {
    setPhoneNumber(value);
    var phoneTemp = '';
    if (Validators.isEmpty(value)) {
      phoneTemp = ValidationMessages.phone_number;
    }
    setPhoneNumberV(phoneTemp);
  };

  const [description, setDescription] = useState('');
  const [descriptionV, setDescriptionV] = useState('');
  const setDescriptionData = value => {
    setDescription(value);
    var descriptionTemp = '';
    if (Validators.isEmpty(value)) {
      descriptionTemp = ValidationMessages.description;
    }
    setDescriptionV(descriptionTemp);
  };

  // useEffect(() => {
  //   // apiCreateShiftCall()
  // }, []);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const { masterlist } = store.getState().userSession
    setChipData(masterlist?.generalDetails)
    console.log('ComplaintType====>', JSON.stringify(data.SecondComplaintscreenData));
    // console.log('productId====>', JSON.stringify(data.SecondComplaintscreenData?.complaintType));

  };

  React.useLayoutEffect(() => {
    navigation.titleString = 'New Complaint';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const checkValidation = () => {
    var emailTemp = '';
    var phoneNumberTemp = '';
    var descriptionTemp = '';
    var fileTemp = '';

    if (email == '') {
      emailTemp = ValidationMessages.login_emailE;
    }
    if (phoneNumber == '') {
      phoneNumberTemp = ValidationMessages.phone_number;
    }
    if (description == '') {
      descriptionTemp = ValidationMessages.description;
    }
    if (filePath == '') {
      fileTemp = ValidationMessages.description;
    }

    setEmailV(emailTemp);
    setPhoneNumberV(phoneNumberTemp);
    setDescriptionV(descriptionTemp);

    if (emailTemp == '' && phoneNumberTemp == '' && descriptionTemp == '') {
      return true;
    } else {
      return false;
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath(response.assets[0].uri);
        RNFS.readFile(response.assets[0].uri, "base64").then(result => {
          // setSingleFileBase64('data:image/png;base64,' + result)

          // setImage('data:/'+response.assets[0].type+';'+'base64,' + result)
          console.log('Base64_Image', 'data:/' + response.assets[0].type + ';' + 'base64,' + result);
          setFileBase64(response.assets[0].type + ';' + 'base64,' + result)

        })

      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
      RNFS.readFile(response.assets[0].uri, "base64").then(result => {
        // setSingleFileBase64('data:image/png;base64,' + result)

        // setImage('data:/'+response.assets[0].type+';'+'base64,' + result)
        console.log('Base64_Image', 'data:/' + response.assets[0].type + ';' + 'base64,' + result);
        setFileBase64('data:/' + response.assets[0].type + ';' + 'base64,' + result)
      })
    });
  };

  const NextButtonPress = () => {
    if (checkValidation()) {
      callCreateComplaintAPI()
    }
  };


  const callCreateComplaintAPI = async () => {

    var request = {
      "CCRNo": data.firstComplaintscreenData.serialNumber,
      "DateComplain": data.firstComplaintscreenData.complaintDate,
      "ComplainType": data.SecondComplaintscreenData.complaintType,
      "Product": data.firstComplaintscreenData.productId,
      "CraneInvNo": data.firstComplaintscreenData.invoiceNumber,
      "ValveSrNos": data.firstComplaintscreenData.serialNumber,

      "OrderedQty": data.SecondComplaintscreenData.QuantityOrdered,
      "DefectiveClaimedQty": data.SecondComplaintscreenData.quantityClaimedDetective,

      "WorkingTempMinMax": data.SecondComplaintscreenData.workingTemperature,
      "OpenCloseForValvePerDay": data.SecondComplaintscreenData.openingClosing,

      "OtherInfo": data.SecondComplaintscreenData.anyOtherInformation,
      "FluidUsed": data.SecondComplaintscreenData.fluidUsed,
      "WorkingPressureMinMax": data.SecondComplaintscreenData.workingpressure,

      "TransporterName": data.SecondComplaintscreenData.transporterName,
      "LRNumber": data.SecondComplaintscreenData.lrNoDelivery,

      "ComplainDescription": data.SecondComplaintscreenData.detailedDescriptionComplaintComplaint,

      "IsGoodsBeingReturned": data.SecondComplaintscreenData.goodsReturned,

      "InstallationProcedure": data.SecondComplaintscreenData.installation,

      "image1": data.firstComplaintscreenData.image1,

      "image2": data.SecondComplaintscreenData.image2,

      "image3": fileBase64,

      "EmailId": email,
      "PhoneNo": phoneNumber,
      "ComplainDescription": description,

      "TempUnit": "3",
      "PressureUnit": "3",
      "IsFromMobleApp": "4",
      "IsCreatedInMobileApp": "5"

    }
    console.log("apiCreateComplaint Request " + JSON.stringify(request));
    setLoading(true)
    await apiCreateComplaint(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiCreateComplaint Response " + JSON.stringify(data_response));
        if (data_response?.Status) {
          setLoading(false);
          ShowAlert(data_response?.Message)
          navigation.navigate('ComplaintSuccessContainer', { data: { complaintNo: data_response?.complaintNo } });
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
    <NewComplaintThreeComponent
      isLoading={isLoading}
      props={props}
      chooseFile={chooseFile}
      captureImage={captureImage}
      filePath={filePath}
      position={position}
      setEmailData={setEmailData}
      email={email}
      setMobileData={setMobileData}
      phoneNumber={phoneNumber}
      setDescriptionData={setDescriptionData}
      description={description}
      NextButtonPress={NextButtonPress}
      emailV={emailV}
      phoneNumberV={phoneNumberV}
      descriptionV={descriptionV}
    />
  );
});

NewComplaintThreeContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  apiCreateComplaint: (params) => dispatch(userActions.apiCreateComplaint(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComplaintThreeContainer);
