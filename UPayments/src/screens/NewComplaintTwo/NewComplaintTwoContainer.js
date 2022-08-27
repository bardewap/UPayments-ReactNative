import React, { memo, useState, useEffect } from 'react';
import { Validators } from '../../utils/validators';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import { ValidationMessages } from '../../utils/theme';
import NewComplaintTwoComponent from './NewComplaintTwoComponent';
import { ShowAlert, Navigation } from '../../utils/theme';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { store } from '../../redux/actions/store';
import RNFS from 'react-native-fs';

import { Platform, PermissionsAndroid } from 'react-native';
const NewComplaintTwoContainer = memo(props => {
  const { navigation } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [filePath2, setFilePath2] = useState('');
  const [filePath3, setFilePath3] = useState('');
  const [position, setPosition] = useState(1);
  const [chipId, setChipId] = useState();
  const { data } = props.route.params;
  const [chipData, setChipData] = React.useState([
    { id: 1, name: 'Wrong/Short Supply' },
    { id: 2, name: 'Premature Failure' },
    { id: 3, name: 'Transit Damage' },
    { id: 4, name: 'Out of Warranty Support ' },
    { id: 5, name: 'Delivery/Document Related Concern' },
    { id: 6, name: 'Quality Defect' },
  ]);

  const [screenDataTwo, setScreenDataTwo] = useState({
    complaintType: '',
    quantityInvolved: '',
    quantityOrdered: '',
    quantityClaimedDetective: '',
    attachments: '',
    quantityInvolvedFailure: '',
    workingTemperature: '',
    openingClosing: '',
    anyOtherInformation: '',
    fluidUsed: '',
    workingpressure: '',
    transporterName: '',
    quantityDamaged: '',
    attachments: '',
    transitLrNumber: '',
    detailedDescription: '',
    detailedDescriptionComplaintComplaint: '',
    missingDocuments: '',
    expectedDeliveryDate: '',
    lrNoDelivery: '',
    goodsReturned: '',
    QuantityOrdered: '',
    installation: '',
    quantityClaimedDetective: '',
    image2: '',
    image3: '',

  });
  const updateOnPress = (item, index) => {
    const categories = chipData.map(item => {
      item.selected = false;
      return item;
    });
    categories[index].selected = true;
    setChipData(categories);
    console.log(item.id)
    setChipId(item.id);
  };
  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const { masterlist } = store.getState().userSession
    // setChipData(masterlist?.complaintType)
    var job_type = masterlist?.complaintType
    console.log("Response CLIENT " + JSON.stringify(masterlist?.complaintType));
    var arrayTempjob_type = []
    job_type.map(item => {
      arrayTempjob_type.push({ label: `${item.ComplainDesc}`, value: `${item.ComplainDesc}`, id: `${item.id}` })
    })
    setJobTypeList(arrayTempjob_type)

  };


  React.useLayoutEffect(() => {
    navigation.titleString = 'New Complaint';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });


  const [jobTypeList, setJobTypeList] = useState([{ label: `Company One`, value: `Company One`, id: `1` }, { label: `Company Two`, value: `Company Two`, id: `2` }]);
  const [JobType, setJobType] = useState("");
  const [selectType, setSelectType] = useState("");
  const [JobTypeId, setJobTypeId] = useState("");
  const [JobTypeV, setJobTypeV] = useState("");
  const setJobTypeNameData = (value, index) => {
    if (index == 0) {
      setJobType("")
      return
    }
    setJobType(value)
    console.log(index)
    if (value == 'Select Complaint Type') {
      setChipId(0)
    }
    var jobTypeTemp = ""
    if (Validators.isEmpty(value)) {
      jobTypeTemp = ValidationMessages.jobType
    }
    setJobTypeV(jobTypeTemp)
    // setJobTypeId(jobTypeList[index - 1].id)
    setChipId(jobTypeList[index - 1].id);
    console.log(index)
    setScreenDataTwo({ ...screenDataTwo, complaintType: jobTypeList[index - 1].id });
  }

  const [quantityInvolved, setQuantityInvolved] = useState('');
  const [quantityInvolvedV, setQuantityInvolvedV] = useState('');
  const setQuantityInvolvedData = value => {
    setQuantityInvolved(value);

    var quantityInvolvedTemp = '';
    if (Validators.isEmpty(value)) {
      quantityInvolvedTemp = ValidationMessages.quantityInvolved;
    }
    setQuantityInvolvedV(quantityInvolvedTemp);
    setScreenDataTwo({ ...screenDataTwo, quantityInvolved: value });

  };

  const [quantityInvolvedFailure, setQuantityInvolvedFailure] = useState('');
  const [quantityInvolvedFailureV, setQuantityInvolvedFailureV] = useState('');
  const setQuantityInvolvedfailureData = value => {
    setQuantityInvolvedFailure(value);
    var quantityInvolvedFailureTemp = '';
    if (Validators.isEmpty(value)) {
      quantityInvolvedFailureTemp = ValidationMessages.quantityInvolveFailure;
    }
    setQuantityInvolvedFailureV(quantityInvolvedFailureTemp);
    setScreenDataTwo({ ...screenDataTwo, quantityInvolvedFailure: value });
  };

  const [workingTemperature, setWorkingTemperature] = useState('');
  const [workingTemperatureV, setWorkingTemperatureV] = useState('');
  const setWorkingTemperatureData = value => {
    setWorkingTemperature(value);
    var workingTemperatureTemp = '';
    if (Validators.isEmpty(value)) {
      workingTemperatureTemp = ValidationMessages.quantityInvolved;
    }
    setWorkingTemperatureV(workingTemperatureTemp);
    setScreenDataTwo({ ...screenDataTwo, workingTemperatureTemp: value });
  };

  const [openingClosing, setOpeningClosing] = useState('');
  const [openingClosingV, setOpeningClosingV] = useState('');
  const setOpeningClosingData = value => {
    setOpeningClosing(value);
    var openingClosingTemp = '';
    if (Validators.isEmpty(value)) {
      openingClosingTemp = ValidationMessages.openingClosing;
    }
    setOpeningClosingV(openingClosingTemp);
    setScreenDataTwo({ ...screenDataTwo, openingClosing: value });
  };

  const [otherInformation, setOtherInformation] = useState('');
  const [otherInformationV, setOtherInformationV] = useState('');
  const setOtherInformationData = value => {
    setOtherInformation(value);
    var otherInformationTemp = '';
    if (Validators.isEmpty(value)) {
      otherInformationTemp = ValidationMessages.otherInformationTemp;
    }
    setOtherInformationV(otherInformationTemp);
    setScreenDataTwo({ ...screenDataTwo, anyOtherInformation: value });
  };

  const [fluidUsed, setFluidUsed] = useState('');
  const [fluidUsedV, setFluidUsedV] = useState('');
  const setFluidUsedData = value => {
    setFluidUsed(value);
    var FluidUsedTemp = '';
    if (Validators.isEmpty(value)) {
      FluidUsedTemp = ValidationMessages.FluidUsed;
    }
    setFluidUsedV(FluidUsedTemp);
    setScreenDataTwo({ ...screenDataTwo, anyOtherInformation: value });

  };

  const [workingpressure, setWorkingPressure] = useState('');
  const [workingpressureV, setWorkingPressureV] = useState('');
  const setWorkingPressureData = value => {
    setWorkingPressure(value);
    var workingpressuretemp = '';
    if (Validators.isEmpty(value)) {
      workingpressuretemp = ValidationMessages.workingPressure;
    }
    setWorkingPressureV(workingpressuretemp);
    setScreenDataTwo({ ...screenDataTwo, workingpressure: value });
  };

  const [transporterName, setTransporterName] = useState('');
  const [transporterNameV, setTransporterNameV] = useState('');
  const setTransporterNameData = value => {
    setTransporterName(value);
    var transporterNameTemp = '';
    if (Validators.isEmpty(value)) {
      transporterNameTemp = ValidationMessages.transporterName;
    }
    setTransporterNameV(transporterNameTemp);
    setScreenDataTwo({ ...screenDataTwo, transporterName: value });
  };

  const [quantityDamaged, setQuantityDamaged] = useState('');
  const [quantityDamagedV, setQuantityDamagedV] = useState('');
  const setQuantityDamagedData = value => {
    setQuantityDamaged(value);
    var quantityDamagedTemp = '';
    if (Validators.isEmpty(value)) {
      quantityDamagedTemp = ValidationMessages.quantityDamagedTemp;
    }
    setQuantityDamagedV(quantityDamagedTemp);
    setScreenDataTwo({ ...screenDataTwo, quantityDamaged: value });
  };

  const [transitLrNumber, setTransitLrNumber] = useState('');
  const [transitLrNumberV, setTransitLrNumberV] = useState('');
  const setTransitLRNumberData = value => {
    setTransitLrNumber(value);
    var transitLrNumberTemp = '';
    if (Validators.isEmpty(value)) {
      transitLrNumberTemp = ValidationMessages.transitLrNumber;
    }
    setTransitLrNumberV(transitLrNumberTemp);
    setScreenDataTwo({ ...screenDataTwo, transitLrNumber: value });
  };

  const [detailedDescription, setDetailedDescription] = useState('');
  const [detailedDescriptionV, setDetailedDescriptionV] = useState('');
  const setDetailedDescriptionData = value => {
    setDetailedDescription(value);
    var detailedDescriptionTemp = '';
    if (Validators.isEmpty(value)) {
      detailedDescriptionTemp = ValidationMessages.detailedDescription;
    }
    setDetailedDescriptionV(detailedDescriptionTemp);
    setScreenDataTwo({ ...screenDataTwo, detailedDescription: value });
  };

  const [description, setDescription] = useState('');
  const [descriptionV, setDescriptionV] = useState('');
  const setDescriptionData = value => {
    setDescription(value);
    var detailedDescriptionTemp = '';
    if (Validators.isEmpty(value)) {
      detailedDescriptionTemp = ValidationMessages.detailedDescription;
    }
    setDescriptionV(detailedDescriptionTemp);
    setScreenDataTwo({ ...screenDataTwo, description: value });
  };

  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryDateV, setDeliveryDateV] = useState('');
  const setDeliveryDateData = value => {
    setDeliveryDate(value);
    var deliveryDataTemp = '';
    if (Validators.isEmpty(value)) {
      deliveryDataTemp = ValidationMessages.deliveryData;
    }
    setDeliveryDateV(deliveryDataTemp);
    setScreenDataTwo({ ...screenDataTwo, deliveryDate: value });
  };

  const [missingDocuments, setMissingDocuments] = useState('');
  const [missingDocumentsV, setMissingDocumentsV] = useState('');
  const setMissingDocumentData = value => {
    setMissingDocuments(value);
    var missingDocsTemp = '';
    if (Validators.isEmpty(value)) {
      missingDocsTemp = ValidationMessages.missingDocs;
    }
    setMissingDocumentsV(missingDocsTemp);
    setScreenDataTwo({ ...screenDataTwo, missingDocuments: value });
  };

  const [goodsReturned, setGoodsReturned] = useState('');
  const [goodsReturnedV, setGoodsReturnedV] = useState('');
  const setGoodsreturnedData = value => {
    setGoodsReturned(value);
    var GoodsReturnedTemp = '';
    if (Validators.isEmpty(value)) {
      setGoodsReturnedTemp = ValidationMessages.GoodsReturnedTemp;
    }
    setGoodsReturnedV(GoodsReturnedTemp);
    setScreenDataTwo({ ...screenDataTwo, goodsReturned: value });
  };

  const [installation, setInstallation] = useState('');
  const [installationV, setInstallationV] = useState('');
  const setInstallationData = value => {
    setInstallation(value);
    var installationTemp = '';
    if (Validators.isEmpty(value)) {
      installationTemp = ValidationMessages.installation;
    }
    setInstallationV(installationTemp);
    setScreenDataTwo({ ...screenDataTwo, installation: value });
  };

  const [quantityordered, setQuantityordered] = useState('');
  const [quantityorderedV, setQuantityorderedV] = useState('');
  const setQuantityorderedData = value => {
    setQuantityordered(value);
    var quantityorderedTemp = '';
    if (Validators.isEmpty(value)) {
      quantityorderedTemp = ValidationMessages.quantityordereddefect;
    }
    setQuantityorderedV(quantityorderedTemp);
    setScreenDataTwo({ ...screenDataTwo, quantityordered: value });
  };

  const [quantityClaimedDetective, setQuantityClaimedDetective] = useState('');
  const [quantityClaimedDetectiveV, setQuantityClaimedDetectiveV] =
    useState('');
  const setQuantityClaimedDetectiveData = value => {
    setQuantityClaimedDetective(value);
    var quantityClaimedDetectiveTemp = '';
    if (Validators.isEmpty(value)) {
      quantityClaimedDetectiveTemp = ValidationMessages.quantityClaimedDetectiveTemp  ;
    }
    setQuantityClaimedDetectiveV(quantityClaimedDetectiveTemp);
    setScreenDataTwo({ ...screenDataTwo, quantityClaimedDetective: value });
  };


  const captureImage2 = async type => {
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
        setFilePath2(response.assets[0].uri);
        RNFS.readFile(response.assets[0].uri, "base64").then(result =>
          {
            // setSingleFileBase64('data:image/png;base64,' + result)
  
            // setImage('data:/'+response.assets[0].type+';'+'base64,' + result)
            console.log('Base64_Image', 'data:/'+response.assets[0].type+';'+'base64,' + result);
            setScreenDataTwo({ ...screenDataTwo, image2: 'data:/'+response.assets[0].type+';'+'base64,' + result });

          }) 
      });
    }
  };

  const captureImage3 = async type => {
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
        
        setFilePath3(response.assets[0].uri);
        RNFS.readFile(response.assets[0].uri, "base64").then(result =>
          {
            // setSingleFileBase64('data:image/png;base64,' + result)

            // setImage('data:/'+response.assets[0].type+';'+'base64,' + result)
            console.log('Base64_Image', 'data:/'+response.assets[0].type+';'+'base64,' + result);
            setScreenDataTwo({ ...screenDataTwo, image3: 'data:/'+response.assets[0].type+';'+'base64,' + result });

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
    });
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

  const NextButtonPress = () => {
      if (checkValidation()) {
      }
    if (chipId == 1) {
      if (checkValidation1()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    } 
    if (chipId == 2) {
      if (checkValidation2()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    }
    if (chipId == 3) {
      if (checkValidation3()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    }
    if (chipId == 4) {
      if (checkValidation4()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    }
    if (chipId == 5) {
      if (checkValidation5()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    }
    if (chipId == 6) {
      if (checkValidation6()) {
        navigation.navigate('NewComplaintThreeContainer',{data:{SecondComplaintscreenData:screenDataTwo,firstComplaintscreenData:data.firstComplaintscreenData}});
      }
    }

  };


  const checkValidation = () => {
    var jobTypeTemp = ""

    if (Validators.isEmpty(JobType)) {
      jobTypeTemp = ValidationMessages.complaintType
    }
   

    setJobTypeV(jobTypeTemp)
 


    if (jobTypeTemp == ""


    ) {
      return true
    } else {
      return false
    }
  }

  const checkValidation1 = () => {
    var quantityInvolvedTemp = ""
    var quantityorderedTemp = ""
    var quantityClaimedDetectiveTemp = ""

    if (Validators.isEmpty(quantityInvolved)) {
      quantityInvolvedTemp = ValidationMessages.quantityInvolved
    }
    if (Validators.isEmpty(quantityordered)) {
      quantityorderedTemp = ValidationMessages.quantityordered
    }
    if (Validators.isEmpty(quantityClaimedDetective)) {
      quantityClaimedDetectiveTemp = ValidationMessages.quantityClaimedDetectiveTemp
    }

    setQuantityInvolvedV(quantityInvolvedTemp)
    setQuantityorderedV(quantityorderedTemp)
    setQuantityClaimedDetectiveV(quantityClaimedDetectiveTemp)


    if (quantityInvolvedTemp == ""
      && quantityorderedTemp == ""
      && quantityClaimedDetectiveTemp == ""

    ) {
      return true
    } else {
      return false
    }
  }

  const checkValidation2 = () => {
    var quantityInvolvedFailureTemp = ""
    var workingTemperatureTemp = ""
    var openingClosingTemp = ""
    var otherInformationTemp = ""
    var FluidUsedTemp = ""
    var workingpressuretemp = ""



    if (Validators.isEmpty(quantityInvolvedFailure)) {
      quantityInvolvedFailureTemp = ValidationMessages.quantityInvolveFailure
    }
    if (Validators.isEmpty(workingTemperature)) {
      workingTemperatureTemp = ValidationMessages.workingTemperatureTemp
    }
    if (Validators.isEmpty(openingClosing)) {
      openingClosingTemp = ValidationMessages.openingClosing
    }
    if (Validators.isEmpty(otherInformation)) {
      otherInformationTemp = ValidationMessages.otherInformationTemp
    } 
    if (Validators.isEmpty(fluidUsed)) {
      FluidUsedTemp = ValidationMessages.FluidUsed
    } if (Validators.isEmpty(workingpressure)) {
      workingpressuretemp = ValidationMessages.workingPressure
    }

    setQuantityInvolvedFailureV(quantityInvolvedFailureTemp)
    setWorkingTemperatureV(workingTemperatureTemp)
    setOpeningClosingV(openingClosingTemp)
    setOtherInformationV(otherInformationTemp)
    setFluidUsedV(FluidUsedTemp)
    setWorkingPressureV(workingpressuretemp)




    if (quantityInvolvedFailureTemp == ""
      && workingTemperatureTemp == ""
      && openingClosingTemp == ""

    ) {
      return true
    } else {
      return false
    }
  }
  const checkValidation3 = () => {
    var GoodsReturnedTemp = ""
    var quantityorderedTemp = ""
    var installationTemp = ""
    var quantityClaimedDetectiveTemp = ""




    if (Validators.isEmpty(goodsReturned)) {
      GoodsReturnedTemp = ValidationMessages.GoodsReturnedTemp
    }
    if (Validators.isEmpty(quantityordered)) {
      quantityorderedTemp = ValidationMessages.quantityordereddefect
    }
    if (Validators.isEmpty(installation)) {
      installationTemp = ValidationMessages.installation
    }
    if (Validators.isEmpty(quantityClaimedDetective)) {
      quantityClaimedDetectiveTemp = ValidationMessages.quantityClaimedDetectiveTemp
    } 
    

    setGoodsReturnedV(GoodsReturnedTemp)
    setQuantityorderedV(quantityorderedTemp)
    setInstallationV(installationTemp)
    setQuantityClaimedDetectiveV(quantityClaimedDetectiveTemp)
 




    if (GoodsReturnedTemp == ""
      && quantityorderedTemp == ""
      && installationTemp == ""
      && quantityClaimedDetectiveTemp == ""


    ) {
      return true
    } else {
      return false
    }
  }

  const checkValidation4 = () => {
    var transporterNameTemp = ""
    var quantityDamagedTemp = ""
    var transitLrNumberTemp = ""


    if (Validators.isEmpty(transporterName)) {
      transporterNameTemp = ValidationMessages.transporterName
    }
    if (Validators.isEmpty(quantityDamaged)) {
      quantityDamagedTemp = ValidationMessages.quantityDamagedTemp
    }
    if (Validators.isEmpty(transitLrNumber)) {
      transitLrNumberTemp = ValidationMessages.transitLrNumber
    }
   
  
    setTransporterNameV(transporterNameTemp)
    setQuantityDamagedV(quantityDamagedTemp)
    setTransitLrNumberV(transitLrNumberTemp)
 

    if (transporterNameTemp == ""
      && quantityDamagedTemp == ""
      && transitLrNumberTemp == ""


    ) {
      return true
    } else {
      return false
    }
  }
  const checkValidation5 = () => {
    var detailedDescriptionTemp = ""
    var missingDocsTemp = ""
    var deliveryDataTemp = ""
    var transitLrNumberTemp = ""



    if (Validators.isEmpty(detailedDescription)) {
      detailedDescriptionTemp = ValidationMessages.detailedDescription
    }
    if (Validators.isEmpty(missingDocuments)) {
      missingDocsTemp = ValidationMessages.missingDocs
    }
    if (Validators.isEmpty(deliveryDate)) {
      deliveryDataTemp = ValidationMessages.deliveryData
    }
    if (Validators.isEmpty(transitLrNumber)) {
      transitLrNumberTemp = ValidationMessages.transitLrNumber
    }
   
    

    setDetailedDescriptionV(detailedDescriptionTemp)
    setMissingDocumentsV(missingDocsTemp)
    setDeliveryDateV(deliveryDataTemp)
    setTransitLrNumberV(transitLrNumberTemp)

 




    if (detailedDescriptionTemp == ""
      && missingDocsTemp == ""
      && deliveryDataTemp == ""
      && transitLrNumberTemp == ""



    ) {
      return true
    } else {
      return false
    }
  }
  const checkValidation6 = () => {
    var descriptionTemp = ""

    if (Validators.isEmpty(description)) {
      descriptionTemp = ValidationMessages.detailedDescription
    }
    
    setDescriptionV(descriptionTemp)
  
    if (descriptionTemp == ""
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <NewComplaintTwoComponent
      isLoading={isLoading}
      props={props}
      position={position}
      NextButtonPress={NextButtonPress}
      setQuantityInvolvedData={setQuantityInvolvedData}
      quantityInvolved={quantityInvolved}
      quantityInvolvedV={quantityInvolvedV}
      setQuantityorderedData={setQuantityorderedData}
      quantityordered={quantityordered}
      quantityorderedV={quantityorderedV}
      setQuantityClaimedDetectiveData={setQuantityClaimedDetectiveData}
      quantityClaimedDetective={quantityClaimedDetective}
      quantityClaimedDetectiveV={quantityClaimedDetectiveV}
      updateOnPress={updateOnPress}
      filePath2={filePath2}
      filePath3={filePath3}
      captureImage2={captureImage2}
      captureImage3={captureImage3}
      chipId={chipId}
      setQuantityInvolvedfailureData={setQuantityInvolvedfailureData}
      quantityInvolvedFailure={quantityInvolvedFailure}
      quantityInvolvedFailureV={quantityInvolvedFailureV}
      setWorkingTemperatureData={setWorkingTemperatureData}
      workingTemperature={workingTemperature}
      workingTemperatureV={workingTemperatureV}
      setOpeningClosingData={setOpeningClosingData}
      openingClosing={openingClosing}
      openingClosingV={openingClosingV}
      setOtherInformationData={setOtherInformationData}
      otherInformation={otherInformation}
      otherInformationV={otherInformationV}
      setFluidUsedData={setFluidUsedData}
      fluidUsed={fluidUsed}
      fluidUsedV={fluidUsedV}
      setWorkingPressureData={setWorkingPressureData}
      workingpressure={workingpressure}
      workingpressureV={workingpressureV}
      setTransporterNameData={setTransporterNameData}
      transporterName={transporterName}
      transporterNameV={transporterNameV}
      setQuantityDamagedData={setQuantityDamagedData}
      quantityDamaged={quantityDamaged}
      quantityDamagedV={quantityDamagedV}
      setTransitLRNumberData={setTransitLRNumberData}
      transitLrNumber={transitLrNumber}
      transitLrNumberV={transitLrNumberV}
      setDetailedDescriptionData={setDetailedDescriptionData}
      detailedDescription={detailedDescription}
      detailedDescriptionV={detailedDescriptionV}
      setDescriptionData={setDescriptionData}
      description={description}
      descriptionV={descriptionV}
      setDeliveryDateData={setDeliveryDateData}
      deliveryDate={deliveryDate}
      deliveryDateV={deliveryDateV}
      setMissingDocumentData={setMissingDocumentData}
      missingDocuments={missingDocuments}
      missingDocumentsV={missingDocumentsV}
      setGoodsreturnedData={setGoodsreturnedData}
      goodsReturned={goodsReturned}
      goodsReturnedV={goodsReturnedV}
      setInstallationData={setInstallationData}
      installation={installation}
      installationV={installationV}
      chipData={chipData}
      setChipData={setChipData}
      jobTypeList={jobTypeList}
      JobType={JobType}
      setJobTypeNameData={setJobTypeNameData}
      JobTypeV={JobTypeV}

    />
  );
});

NewComplaintTwoContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComplaintTwoContainer);
