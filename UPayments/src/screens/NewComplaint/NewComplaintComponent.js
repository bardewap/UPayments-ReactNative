import React, { memo, useState } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Images } from '../../utils/theme';
import { colors,sizes,fonts, globalStyles } from '../../utils/theme';
import Loader from '../../components/Loader';
import { Chip } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import DateTimePicker from '../../components/DateTimePicker';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewComplaintComponent = memo(props => {
  const labels = ['Complaint details', 'Complaint Type', 'General details'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#003366',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#003366',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#',
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
          <Text style={styles.HedingText}>Complaint Date</Text>
          {/* <>
            <Text style={styles.HedingText} onPress={() => setOpen(true)}>
              {Moment(props.date).format('DD/MMM/YYYY')}
            </Text>
            <DatePicker
              modal
              open={open}
              date={props.date}
              mode="date"
              textColor={colors.black}
              placeholder="MM/DD/YYYY"
              androidVariant="nativeAndroid"
              onConfirm={date => {
                setOpen(false);
                props.setDateData(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </> */}
            <View style={globalStyles.containerStylesText}>
            <TouchableOpacity
              onPress={() => { props.setShowTimePickerDataSet2(true) }}
              style={styles.dateTimeTextBackground}>
              <View style={globalStyles.inputStylesText}>
                <Text style={{
                  color: props.screenData.dobFormated==='Choose complaint date ›'? colors.main:colors.black
                  ,
                  fontSize: sizes.regular,
                  backgroundColor: colors.white,
                  borderColor: colors.gray,
                  marginTop: 10,
                }}>{props.screenData.dobFormated}</Text>
                <DateTimePicker
                  isVisible={props.showTimePicker2}
                  mode="date"
                  maximumDate={props.maximumDate}
                  date={props?.screenData?.complaintDate ? new Date(props?.screenData?.complaintDate) : props?.minimumDate}
                  onConfirm={props.onConfirm2}
                  onCancel={props.onCancel2}
                >
                </DateTimePicker>
              </View>
            </TouchableOpacity>
            {/* <Text style={globalStyles.labelStylesText}>{"Birthday"}</Text> */}
          </View>
          <View style={styles.divider}></View>
          {
            props.complaintDateV != "" ? <Text style={globalStyles.labelStylesTextErrorLogin}>{props.complaintDateV}</Text> : null
          }

          <Text style={styles.HedingText}>Attachment</Text>
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
          <Text style={styles.HedingText}>Valve Serial Number</Text>
          <View style={{ marginTop: 5 }}>
            <TextInput
              onChangeText={value => {
                props.setserialNumberData(value);
              }}
              placeholder="Valve Serial Number"
              value={props.serialNumber}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="numeric"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>
          {
            props.serialNumberV != "" ? <Text style={globalStyles.labelStylesTextErrorLogin}>{props.serialNumberV}</Text> : null
          }

          <Text style={styles.HedingText}>Invoice Number</Text>
          <View style={{ marginTop: 5 }}>
            <TextInput
              onChangeText={value => {
                props.setInvoiceNumberData(value);
              }}
              placeholder="Invoice Number"
              value={props.InvoiceNumber}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="numeric"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>
          {
            props.InvoiceNumberV != "" ? <Text style={globalStyles.labelStylesTextErrorLogin}>{props.InvoiceNumberV}</Text> : null
          }

          <Text style={styles.HedingText}>Product Type</Text>
          <View style={styles.chipsContainer}>
            {props.chipData.map((item, index) => {
              return (
                <View
                  style={{
                    margin: 5,
                    marginLeft: 15,
                    flexWrap: 'wrap',
                  }}>
                  <Chip
                    key={index}
                    variant="outlined" //changing display mode, default is flat.
                    height={40} //give desirable height to chip
                    textStyle={
                      item.selected
                        ? styles.chipsTextStylePressed
                        : styles.chipsTextStyle
                    } //label properties
                    style={
                      item.selected
                        ? styles.chipsStylepressed
                        : styles.chipsStyle
                    }
                    onPress={() => props.updateOnPress(item, index)}>
                    {item.proudctType}
                  </Chip>
                </View>
              );
            })}
          </View>
          <View style={styles.divider}></View>
          {
            props.chipIDV != "" ? <Text style={globalStyles.labelStylesTextErrorLogin}>{props.chipIDV}</Text> : null
          }
        </ScrollView>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => {
          props.NextButtonPress();
        }}
        style={styles.NextButton}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
      <SafeAreaView />
    </View>
  );
});

export default NewComplaintComponent;
