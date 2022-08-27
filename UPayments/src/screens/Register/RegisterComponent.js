import React, {memo, useState} from 'react';
import {
  View,
  ImageBackground,
  Modal,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {globalStyles, Images} from '../../utils/theme';
import {colors} from '../../utils/theme';
import Loader from '../../components/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegisterComponent = memo(props => {
  return (
    <View safe style={styles.container}>
      <Loader loading={props.isLoading} />
      <ImageBackground style={styles.background} source={Images.sigIn_bg} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.keyBordContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <Image source={Images.signIn_icon} style={styles.logo} />
          <Text style={styles.HedingText}>Register</Text>
          <View style={{marginTop: 20}}>
            <TextInput
              onChangeText={value => {
                props.setNameData(value);
              }}
              placeholder="Name"
              value={props.name}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="email-address"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          {props.nameV != '' ? (
            <Text style={globalStyles.labelStylesTextErrorLogin}>
              {props.nameV}
            </Text>
          ) : null}
          <View>
            <TextInput
              onChangeText={value => {
                props.setEmailIdData(value);
              }}
              placeholder="Email "
              value={props.emailId}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="email-address"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          {props.emailIdV != '' ? (
            <Text style={globalStyles.labelStylesTextErrorLogin}>
              {props.emailIdV}
            </Text>
          ) : null}
          <View>
            <TextInput
              onChangeText={value => {
                props.setNumberData(value);
              }}
              placeholder="Number"
              contextMenuHidden={true}
              maxLength={10}
              value={props.number}
              autoCapitalize="none"
              keyboardType="number-pad"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>

          {props.numberV != '' ? (
            <Text style={globalStyles.labelStylesTextErrorLogin}>
              {props.numberV}
            </Text>
          ) : null}

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={props.modalVisible}
              // onRequestClose={() => {
              //   Alert.alert("Modal has been closed.");
              //   setModalVisible(!modalVisible);
              // }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <ImageBackground
                    style={styles.right_icon}
                    source={Images.right_icon}
                  />
                  <Image source={Images.ic_tick} style={styles.tick} />

                  <Text style={styles.modalText}>
                    Request sent to admin{'\n'}successfully{' '}
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.cancelButtonPress()}>
                    <Text style={styles.textStyle}>DONE</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.registerButtonPress();
            }}
            style={styles.login}>
            <Text style={styles.logintext}>REGISTER</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default RegisterComponent;
