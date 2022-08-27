import React, { memo, useState } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { globalStyles, Images } from '../../utils/theme';
import { colors, fonts, sizes } from '../../utils/theme';
import Loader from '../../components/Loader';
import RNPickerSelect from 'react-native-picker-select';
// import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import { Chip } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import Moment from 'moment';
import StepIndicator from 'react-native-step-indicator';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewComplaintThreeComponent = memo(props => {
  const labels = ['Complaint details', 'Complaint Type', 'General details'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#003366',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#003366',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#003366',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#003366',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 14,
    currentStepLabelColor: colors.black,
    labelAlign: 'center',
  };

  const [open, setOpen] = useState(false);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openEndTime, setOpenEndTime] = useState(false);
  return (
    <View safe style={styles.container}>
      <Loader loading={props.isLoading} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.keyBordContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={props.position}
            labels={labels}
            stepCount={3}
          />

          <Text style={styles.HedingText}>Email</Text>
          <View style={{ marginTop: 5 }}>
            <TextInput
              onChangeText={value => {
                props.setEmailData(value);
              }}
              placeholder="Email Address"
              value={props.email}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="email-address"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>
          {props.emailV != '' ? (
            <Text style={globalStyles.labelStylesTextError}>
              {props.emailV}
            </Text>
          ) : null}

          <Text style={styles.HedingText}>Mobile Number</Text>
          <View style={{ marginTop: 5 }}>
            <TextInput
              onChangeText={value => {
                props.setMobileData(value);
              }}
              placeholder="Mobile Number"
              value={props.phoneNumber}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={10}
              keyboardType="number-pad"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>
          {props.phoneNumberV != '' ? (
            <Text style={globalStyles.labelStylesTextError}>
              {props.phoneNumberV}
            </Text>
          ) : null}

          <Text style={styles.HedingText}>Description</Text>
          <View style={{ marginTop: 5 }}>
            <TextInput
              onChangeText={value => {
                props.setDescriptionData(value);
              }}
              placeholder="Enter Your Concern Here...."
              value={props.description}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={300}
              multiline={true}
              keyboardType="default"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>
          {props.descriptionV != '' ? (
            <Text style={globalStyles.labelStylesTextError}>
              {props.descriptionV}
            </Text>
          ) : null}

          <Text style={styles.HedingText}>Attachments</Text>
          {props.filePath == '' ? (
            <>
              <ImageBackground
                style={styles.background}
                source={Images.upload_bg}>
                <Image source={Images.camera} style={styles.camera} />
                <TouchableOpacity
                  onPress={() => props.captureImage('photo')}
                  style={styles.buttonBackStyle1}>
                  <Text style={styles.buttonTextStyle1}>
                    Take a photo and upload
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </>
          ) : (
            <ImageBackground
              style={styles.background}
              source={Images.upload_bg}>
              <Image source={{ uri: props.filePath }} style={styles.image} />
            </ImageBackground>
          )}
        </ScrollView>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => {
          props.NextButtonPress();
        }}
        style={styles.NextButton}>
        <Text style={styles.submitText}>Submit Complaint</Text>
      </TouchableOpacity>
      <SafeAreaView />
    </View>
  );
});

export default NewComplaintThreeComponent;
