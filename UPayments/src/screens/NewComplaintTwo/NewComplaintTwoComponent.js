import React, { memo } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { globalStyles } from '../../utils/theme';
import { colors, Images } from '../../utils/theme';
import Loader from '../../components/Loader';
import { Chip } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';

const NewComplaintTwoComponent = memo(props => {
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
          <Text style={styles.HedingText}>Complaint Type</Text>

          <View style={styles.topSection}>
            <RNPickerSelect
              value={props.JobType}
              onValueChange={(value, index) => { props.setJobTypeNameData(value, index) }}
              useNativeAndroidPickerStyle={false}
              placeholder={{ label: 'Select Complaint Type', value: 'Select Complaint Type' }}
              style={globalStyles}
              items={props.jobTypeList}
            />
            <Image source={Images.drop_down} style={globalStyles.dropImage}></Image>
          </View>
          {props.JobTypeV != '' ? (
            <Text style={globalStyles.labelStylesTextError}>
              {props.JobTypeV}
            </Text>
          ) : null}

          {/* <View style={styles.chipsContainer}>
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
                    onPress={() => props.updateOnPress(item,index)}>
                    {item.ComplainDesc}
                  </Chip>
                </View>
              );
            })}
          </View> */}


          {props.JobType == "" ? (
            <>
              <View>

              </View>

            </>
          ) : null}


          {props.chipId == 1 ? (
            <>
                <View style={{ flex: 1 }}>
                  <Text style={styles.HedingText}>Quantity Involved*</Text>
                  <View style={{ marginTop: 5 }}>
                    <TextInput
                      onChangeText={value => {
                        props.setQuantityInvolvedData(value);
                      }}
                      placeholder="Enter Quantity"
                      value={props.quantityInvolved}
                      contextMenuHidden={true}
                      autoCapitalize="none"
                      maxLength={5}
                      multiline={true}
                      keyboardType="number-pad"
                      placeholderTextColor={colors.hint_color}
                      style={styles.inputText}
                    />
                  </View>
                  <View style={styles.divider}></View>
                  {props.quantityInvolvedV != '' ? (
                  <Text style={globalStyles.labelStylesTextError}>
                    {props.quantityInvolvedV}
                  </Text>
                ) : null}
                </View>


                <View style={{ flex: 1 }}>
                  <Text style={styles.HedingText}>Quantity Ordered*</Text>
                  <View style={{ marginTop: 5 }}>
                    <TextInput
                      onChangeText={value => {
                        props.setQuantityorderedData(value);
                      }}
                      placeholder="Enter Quantity"
                      value={props.quantityordered}
                      contextMenuHidden={true}
                      autoCapitalize="none"
                      maxLength={5}
                      multiline={true}
                      keyboardType="number-pad"
                      placeholderTextColor={colors.hint_color}
                      style={styles.inputText}
                    />
                  </View>
                  <View style={styles.divider}></View>
                  {props.quantityorderedV != '' ? (
                  <Text style={globalStyles.labelStylesTextError}>
                    {props.quantityorderedV}
                  </Text>
                ) : null}
                </View>


              {/* <View style={styles.timeSection}>
                {props.quantityInvolvedV != '' ? (
                  <Text style={globalStyles.labelStylesTextErrorL}>
                    {props.quantityInvolvedV}
                  </Text>
                ) : null}

                {props.quantityorderedV != '' ? (
                  <Text style={globalStyles.labelStylesTextErrorR}>
                    {props.quantityorderedV}
                  </Text>
                ) : null}

              </View> */}


              <Text style={styles.HedingText}>Quantity Claimed Defective*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setQuantityClaimedDetectiveData(value);
                  }}
                  placeholder="Enter Your Concern Here...."
                  value={props.quantityClaimedDetective}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.quantityClaimedDetectiveV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.quantityClaimedDetectiveV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Attachments</Text>
              {props.filePath2 == '' ? (
                <>
                  <ImageBackground
                    style={styles.background}
                    source={Images.upload_bg}>
                    <Image source={Images.camera} style={styles.camera} />
                    <TouchableOpacity
                      onPress={() => props.captureImage2('photo')}
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
                  <Image source={{ uri: props.filePath2 }} style={styles.image} />
                </ImageBackground>
              )}
            </>
          ) : null}

          {props.chipId == 2 ? (
            <>
              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>
                  Quantity Involved in failure*
                </Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setQuantityInvolvedfailureData(value);
                    }}
                    placeholder="Enter Quantity Involved in failure"
                    value={props.quantityInvolvedFailure}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={5}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.quantityInvolvedFailureV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.quantityInvolvedFailureV}
                </Text>
              ) : null}

              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>
                  Working temperature min/max*
                </Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setWorkingTemperatureData(value);
                    }}
                    placeholder="Enter temperature"
                    value={props.workingTemperature}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={5}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.workingTemperatureV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.workingTemperatureV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Opening/closing per day*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setOpeningClosingData(value);
                  }}
                  placeholder="Enter Opening/closing per day"
                  value={props.openingClosing}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.openingClosingV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.openingClosingV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Any other Information*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setOtherInformationData(value);
                  }}
                  placeholder="Enter Your Concern Here...."
                  value={props.otherInformation}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="default"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.otherInformationV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.otherInformationV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Fluid Used*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setFluidUsedData(value);
                  }}
                  placeholder="Enter Fluid Used"
                  value={props.fluidUsed}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.fluidUsedV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.fluidUsedV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Working Pressure min/max*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setWorkingPressureData(value);
                  }}
                  placeholder="Enter Working Pressure min/max"
                  value={props.workingpressure}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.workingpressureV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.workingpressureV}
                </Text>
              ) : null}
            </>
          ) : null}

          {props.chipId == 4 ? (
            <>
              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>Name of transporter*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setTransporterNameData(value);
                    }}
                    placeholder="Enter Name of transporter"
                    value={props.transporterName}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={30}
                    multiline={true}
                    keyboardType="default"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.transporterNameV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.transporterNameV}
                </Text>
              ) : null}

              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>Quantity Damaged*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setQuantityDamagedData(value);
                    }}
                    placeholder="Enter Quantity"
                    value={props.quantityDamaged}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={30}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.quantityDamagedV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.quantityDamagedV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Attachments</Text>
              {props.filePath3 == '' ? (
                <>
                  <ImageBackground
                    style={styles.background}
                    source={Images.upload_bg}>
                    <Image source={Images.camera} style={styles.camera} />
                    <TouchableOpacity
                      onPress={() => props.captureImage3('photo')}
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
                  <Image source={{ uri: props.filePath3 }} style={styles.image} />
                </ImageBackground>
              )}

              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>LR. No*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setTransitLRNumberData(value);
                    }}
                    placeholder="Enter LR. Number"
                    value={props.transitLrNumber}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={10}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.transitLrNumberV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.transitLrNumberV}
                </Text>
              ) : null}
            </>
          ) : null}

          {props.chipId == 6 ? (
            <>
              <View style={styles.timeSection}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.HedingText2}>
                    Detailed Description Of Complaint*
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <TextInput
                      onChangeText={value => {
                        props.setDescriptionData(value);
                      }}
                      placeholder="Enter Description Of Complaint"
                      value={props.description}
                      contextMenuHidden={true}
                      autoCapitalize="none"
                      maxLength={300}
                      multiline={true}
                      keyboardType="default"
                      placeholderTextColor={colors.hint_color}
                      style={styles.inputText1}
                    />
                  </View>
                  <View style={styles.divider1}></View>
                  {props.descriptionV != '' ? (
                    <Text style={globalStyles.labelStylesTextError}>
                      {props.descriptionV}
                    </Text>
                  ) : null}
                </View>
              </View>
            </>
          ) : null}

          {props.chipId == 5 ? (
            <>
              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>
                  Detailed Description of Complaint*
                </Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setDetailedDescriptionData(value);
                    }}
                    placeholder="Enter Description of Complaint"
                    value={props.detailedDescription}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={300}
                    multiline={true}
                    keyboardType="default"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.detailedDescriptionV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.detailedDescriptionV}
                </Text>
              ) : null}

              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>Missing Documents*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setMissingDocumentData(value);
                    }}
                    placeholder="Enter Missing Documents"
                    value={props.missingDocuments}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={200}
                    multiline={true}
                    keyboardType="default"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.missingDocumentsV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.missingDocumentsV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Expected delivery date*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setDeliveryDateData(value);
                  }}
                  placeholder="Enter Your Concern Here...."
                  value={props.deliveryDate}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={30}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.deliveryDateV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.deliveryDateV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>LR. No*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setTransitLRNumberData(value);
                  }}
                  placeholder="Enter LR. Number"
                  value={props.transitLrNumber}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.transitLrNumberV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.transitLrNumberV}
                </Text>
              ) : null}
            </>
          ) : null}

          {props.chipId == 3 ? (
            <>
              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>Goods being returned*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setGoodsreturnedData(value);
                    }}
                    placeholder="Enter Quantity"
                    value={props.goodsReturned}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={5}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.goodsReturnedV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.goodsReturnedV}
                </Text>
              ) : null}

              <View style={{ flex: 1 }}>
                <Text style={styles.HedingText}>Quantity Ordered*</Text>
                <View style={{ marginTop: 5 }}>
                  <TextInput
                    onChangeText={value => {
                      props.setQuantityorderedData(value);
                    }}
                    placeholder="Enter Quantity"
                    value={props.quantityordered}
                    contextMenuHidden={true}
                    autoCapitalize="none"
                    maxLength={5}
                    multiline={true}
                    keyboardType="number-pad"
                    placeholderTextColor={colors.hint_color}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.divider1}></View>
              </View>
              {props.quantityorderedV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.quantityorderedV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>
                Installation/Assembly procedure*
              </Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setInstallationData(value);
                  }}
                  placeholder="Enter Installation/Assembly procedure"
                  value={props.installation}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.installationV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.installationV}
                </Text>
              ) : null}

              <Text style={styles.HedingText}>Quantity claimed defective*</Text>
              <View style={{ marginTop: 5 }}>
                <TextInput
                  onChangeText={value => {
                    props.setQuantityClaimedDetectiveData(value);
                  }}
                  placeholder="Enter Quantity claimed defective"
                  value={props.quantityClaimedDetective}
                  contextMenuHidden={true}
                  autoCapitalize="none"
                  maxLength={5}
                  multiline={true}
                  keyboardType="number-pad"
                  placeholderTextColor={colors.hint_color}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.divider}></View>
              {props.quantityClaimedDetectiveV != '' ? (
                <Text style={globalStyles.labelStylesTextError}>
                  {props.quantityClaimedDetectiveV}
                </Text>
              ) : null}
            </>
          ) : null}
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

export default NewComplaintTwoComponent;
