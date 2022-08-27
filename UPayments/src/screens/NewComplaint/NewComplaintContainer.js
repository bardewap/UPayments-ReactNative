import React, { memo, useState, useEffect } from 'react';
import { ValidationMessages } from '../../utils/theme';
import {
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { Validators } from '../../utils/validators';
import { connect } from 'react-redux';
import { store } from '../../redux/actions/store';
import NewComplaintComponent from './NewComplaintComponent';
import { ShowAlert, Navigation } from '../../utils/theme';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Moment from 'moment';
import RNFS from 'react-native-fs';

const NewComplaintContainer = memo(props => {
  const { navigation, apiCreateShift, apiShiftStore } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [shiftTypesList, setShiftTypesList] = useState([]);
  const [jobTypesList, setJobTypesList] = useState([]);
  const [shiftTypeName, setShiftTypeName] = useState('');
  const [shiftTypeID, setShiftTypeID] = useState('');
  const [totalHours, setTotalhours] = useState('');
  const [show, setShow] = useState(false);
  const [latemode, setLateMode] = useState('outlined');
  const [nightmode, setNightMode] = useState('outlined');
  const [longDaymode, setLongDayMode] = useState('outlined');
  const [jobType, setJobType] = useState('');
  const [chipID, setChipID] = useState('');
  const [chipIDV, setChipIDV] = useState('');
  const [background, setBackground] = useState('#F0643A');
  const [minimumDate2, setMinimumDate2] = useState(new Date())
  const [showTimePicker2, setShowTimePicker2] = useState(false);
  const [complaintDateV, setComplaintDateV] = useState('');
  const [image1, setImage] = useState('');


  const [chipData, setChipData] = React.useState([
    { id: 1, name: 'Diaphragm Valve' },
    { id: 2, name: 'Butterfly Valve' },
    { id: 3, name: 'Ball Valve' },
    { id: 4, name: 'Pump ' },
    { id: 5, name: 'Aseptic Valve' },
    { id: 6, name: 'Duocheck Valve' },
    { id: 7, name: 'Mix Valve' },
    { id: 8, name: 'Unicheck Valve' },
  ]);

  const [screenData, setScreenData] = useState({
    serialNumber: '',
    productId: '',
    invoiceNumber: '',
    dobFormated: 'Choose complaint date ›',
    complaintDate: '',
    image1: '',

    
  });

  const [on, setOn] = React.useState(false);
  const [jobTypeV, setJobTypeV] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedRadtioButton, setSelectedRadioButton] = useState('');
  const [InvoiceNumber, setInvoiceNumber] = useState('');
  const [InvoiceNumberV, setInvoiceNumberV] = useState('');
  const setInvoiceNumberData = value => {
    setInvoiceNumber(value);
    var InvoiceNumberTemp = '';
    if (Validators.isEmpty(value)) {
      InvoiceNumberTemp = ValidationMessages.InvoiceNumber;
    } 
    setInvoiceNumberV(InvoiceNumberTemp);
    setScreenData({ ...screenData, invoiceNumber: value });

  };


  const [serialNumber, setSerialNumber] = useState('');
  const [serialNumberV, setSerialNumberV] = useState('');
  const setserialNumberData = value => {
    setSerialNumber(value);
    var serialNumberTemp = '';
    if (Validators.isEmpty(value)) {
      serialNumberTemp = ValidationMessages.serialNumber;
    }
    setSerialNumberV(serialNumberTemp);
    setScreenData({ ...screenData, serialNumber: value });

  };


  const setShowTimePickerDataSet2 = (value) => {
    var currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 10);
    setMinimumDate2(currentDate)
    setShowTimePicker2(value)
  }

  const onCancel2 = () => {
    setShowTimePicker2(false);
    setScreenData({ ...screenData, dobFormated: "Choose complaint date ›", complaintDate: null });
  };
  const onConfirm2 = date => {
    setShowTimePicker2(false);
    // if(date.valueOf() > new Date().valueOf()+(9 * 60 * 1000)) {
    var formatedDate = `${Moment(date).format('DD-MM-YYYY')}`
    setScreenData({ ...screenData, dobFormated: formatedDate, complaintDate: date });
    // }
  };

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const { masterlist } = store.getState().userSession
    console.log('dkabdbabfkbaf', masterlist);
    setChipData(masterlist?.ProductType)
  };

  React.useLayoutEffect(() => {
    navigation.titleString = 'New Complaint';
    Navigation.setNavigation5(navigation);
    navigation.goBackPress = () => {
      navigation.goBack();
    };
  });

  const [filePath, setFilePath] = useState('');
  const [position, setPosition] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientNameID, setClientNameID] = useState('');
  const [clientNameV, setClientNameV] = useState('');
  const setClientNameData = (value, index) => {
    if (index == 0) {
      setClientName('');
      return;
    }
    setClientName(value);
    var clientNameTemp = '';
    if (Validators.isEmpty(value)) {
      clientNameTemp = ValidationMessages.ClientNameDrop;
    }
    setClientNameV(clientNameTemp);
    setClientNameID(clientList[index - 1].id);
  };

  const [CompanyName, setCompanyName] = useState('');
  const [CompanyNameID, setCompanyNameID] = useState('');
  const [CompanyNameV, setCompanyNameV] = useState('');
  const setCompanyNameData = (value, index) => {
    if (index == 0) {
      setCompanyName('');
      return;
    }
    setCompanyName(value);
    var CompanyNameTemp = '';
    if (Validators.isEmpty(value)) {
      CompanyNameTemp = ValidationMessages.billable;
    }
    setCompanyNameV(CompanyNameTemp);
    setCompanyNameID(companyList[index - 1].id);
  };

  const [CompanyGroup, setCompanygroup] = useState('');
  const [CompanyGroupID, setCompanygroupID] = useState('');
  const [CompanyGroupV, setCompanygroupV] = useState('');
  const setCompanyGroupData = (value, index) => {
    if (index == 0) {
      setCompanygroup('');
      return;
    }
    setCompanygroup(value);
    var CompanyGroupTemp = '';
    if (Validators.isEmpty(value)) {
      CompanyGroupTemp = ValidationMessages.billable;
    }
    setCompanygroupV(CompanyGroupTemp);
    setCompanygroupID(companyGroupList[index - 1].id);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [startDateV, setStartDateV] = useState('');
  const setStartDateData = value => {
    setStartDate(value);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setStartDate(currentDate);
  };

  const setLongDayChipPress = () => {
    setLongDayMode('flat');
    setLateMode('outlined');
    setNightMode('outlined');
  };

  const setLateChipPress = (item, index) => {
    // setLateMode('flat')
    // setLongDayMode('outlined')
    // setNightMode('outlined')

    ShowAlert(item.name + '');
    console.log(index);
  };

  const setChipPress = (item, index) => {
    setSelectedItem(1);
    setOn(true);
    console.log(item.id + ' ' + selectedItem);
  };

  const setRadioPress = (item, index) => {
    setSelectedRadioButton(item._id);
    setJobType(item.name);
    setJobTypeID(item._id);
    setJobTypeV('');
  };

  const setNightChipPress = () => {
    setNightMode('flat');
    setLongDayMode('outlined');
    setLateMode('outlined');
  };


  const checkValidation = () => {
    var complaintDateTemp = ""
    var serialNumberTemp = ""
    var invoiceNumberTemp = ""
    var chipTemp = ""

    if (Validators.isEmpty(screenData.complaintDate+"")) {
      complaintDateTemp = ValidationMessages.complaintDate
    }

    if (Validators.isEmpty(serialNumber)) {
      serialNumberTemp = ValidationMessages.serialNumber
    }
    if (Validators.isEmpty(InvoiceNumber)) {
      invoiceNumberTemp = ValidationMessages.InvoiceNumber
    }
    if (Validators.isEmpty(chipID+"")) {
      chipTemp = ValidationMessages.productType
    }
    
    setComplaintDateV(complaintDateTemp)
    setSerialNumberV(serialNumberTemp)
    setInvoiceNumberV(invoiceNumberTemp)
    setChipIDV(chipTemp)

   
    if (serialNumberTemp == ""
      && invoiceNumberTemp == ""
      && chipTemp == ""

    ) {
      return true
    } else {
      return false
    }
  }
 

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
        RNFS.readFile(response.assets[0].uri, "base64").then(result =>
          {
            // setSingleFileBase64('data:image/png;base64,' + result)
  
            setImage('data:/'+response.assets[0].type+';'+'base64,' + result)
            console.log('Base64_Image', 'data:/'+response.assets[0].type+';'+'base64,' + result);
            setScreenData({ ...screenData, image1: 'data:/'+response.assets[0].type+';'+'base64,' + result });

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
      console.log(response)

      
    });
  };

  const NextButtonPress = () => {

    if (checkValidation()) {
      navigation.navigate('NewComplaintTwoContainer',{data:{firstComplaintscreenData:screenData}});
    }
  };


  const updateOnPress = (item, index) => {
    const categories = chipData.map(item => {
      item.selected = false;
      return item;
    });
    categories[index].selected = true;
    setChipData(categories);
    console.log("ITEM_ID",item.id)
    setChipID(item.id)
    setScreenData({ ...screenData, productId: item.id });
  };

  const setDateData = (date) => {
    setData(date)
    console.log("Complaint date:" + date)
    setScreenData({ ...screenData, complaintDate: date });

  };

  return (
    <NewComplaintComponent
      isLoading={isLoading}
      props={props}
      setStartDateData={setStartDateData}
      startDate={startDate}
      NextButtonPress={NextButtonPress}
      date={date}
      onChange={onChange}
      latemode={latemode}
      jobTypeV={jobTypeV}
      setLongDayChipPress={setLongDayChipPress}
      setLateChipPress={setLateChipPress}
      setNightChipPress={setNightChipPress}
      nightmode={nightmode}
      longDaymode={longDaymode}
      setInvoiceNumberData={setInvoiceNumberData}
      InvoiceNumber={InvoiceNumber}
      InvoiceNumberV={InvoiceNumberV}
      // onPressRadioButton1={onPressRadioButton1}
      // radioButtons1={radioButtons1}
      setDateData={setDateData}
      startTime={startTime}
      setStartTime={setStartTime}
      setEndTime={setEndTime}
      endTime={endTime}
      shiftTypesList={shiftTypesList}
      setChipPress={setChipPress}
      selectedItem={selectedItem}
      jobTypesList={jobTypesList}
      setRadioPress={setRadioPress}
      selectedRadtioButton={selectedRadtioButton}
      chooseFile={chooseFile}
      captureImage={captureImage}
      filePath={filePath}
      position={position}
      background={background}
      on={on}
      chipData={chipData}
      setChipData={setChipData}
      updateOnPress={updateOnPress}
      setserialNumberData={setserialNumberData}
      serialNumber={serialNumber}
      serialNumberV={serialNumberV}
      chipIDV={chipIDV}
      setShowTimePickerDataSet2={setShowTimePickerDataSet2}
      onCancel2={onCancel2}
      onConfirm2={onConfirm2}
      minimumDate2={minimumDate2}
      showTimePicker2={showTimePicker2}
      screenData={screenData}
      complaintDateV={complaintDateV}

    />
  );
});

NewComplaintContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComplaintContainer);
