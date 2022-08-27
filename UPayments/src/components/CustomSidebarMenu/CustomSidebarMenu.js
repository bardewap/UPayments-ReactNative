import React, {useState, useEffect, memo} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {Images, colors, fonts, sizes, constants} from '../../utils/theme';
import {store} from '../../redux/actions/store';
import {useDrawerStatus} from '@react-navigation/drawer';
import * as CommonAction from '../../redux/actions/CommonAction';

const CustomSidebarMenu = memo(({navigation, clearUserSession}) => {
  const [data, setData] = useState({
    email: '',
    profileImage: '',
    name: '',
  });

  const isDrawerOpen = useDrawerStatus();

  useEffect(() => {
    setDataProfile();
  }, [isDrawerOpen]);

  const setDataProfile = async () => {
    const {user_data} = store.getState().userSession;
    const user_profile_name = user_data.username;
    const user_profile_email = user_data.role;

    console.log('dkabdbabfkbaf', user_data);
    setData({...data, email: user_profile_email, name: user_profile_name});
  };

  const items_tools = [
    {
      navOptionThumb: Images.selected_home,
      navOptionName: 'Home',
      screenToNavigate: 'HomeContainer',
    },
    {
      navOptionThumb: Images.selected_shift,
      navOptionName: 'My Shifts',
      screenToNavigate: 'ShiftListContainer',
    },
    {
      navOptionThumb: Images.selected_myprofile,
      navOptionName: 'My Profile',
      screenToNavigate: 'MyProfileContainer',
    },

    // {

    //   navOptionThumb: Images.staff_invoices_drawer,
    //   navOptionName: 'Testing',
    //   screenToNavigate: 'StaffInvoiceScreen',
    // },
    // {

    //   navOptionThumb: Images.inciddent_register_drawer,
    //   navOptionName: 'Testing',
    //   screenToNavigate: 'IncidentsRegisterContainer',
    // },
    // {
    //   navOptionThumb: Images.risk_assessment_drawer,
    //   navOptionName: "Testing",
    //   screenToNavigate: 'RiskAssessmentContainer',
    // },
    // {
    //   navOptionThumb: Images.risk_assessment_drawer,
    //   navOptionName: "Testing",
    //   screenToNavigate: 'RiskAssessmentListContainer',
    // },
    // {

    //   navOptionThumb: Images.change_password_drawer,
    //   navOptionName: 'Change Password',
    //   screenToNavigate: 'ResetPasswordContainer',
    // },
    {
      navOptionThumb: Images.logout_blue1,
      navOptionName: 'Log Out',
      screenToNavigate: 'LoginContainer',
      index: 0,
    },
  ];

  return (
    <View style={styles.sideMenuContainer}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.StatusBar}>
          <StatusBar translucent barStyle="dark-content" />
        </View>
        <View style={{width: '100%', backgroundColor: colors.main_color}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.profileImgContainer}>
              <View style={styles.profileImg1}>
                <Text
                  style={{
                    fontSize: sizes.regularLarge,
                    fontSize: 18,
                    color: colors.main_color,
                    alignItems: 'center',
                  }}>
                  {data?.name == '' || data.name == undefined
                    ? ''
                    : data.name[0]}
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: sizes.regular,
                  marginLeft: 15,
                  color: colors.white,
                  marginTop: 15,
                }}>
                {data.name}
              </Text>

              <Text
                style={{
                  marginLeft: 15,
                  fontSize: sizes.small,
                  marginRight: 10,
                  color: colors.white,
                  marginBottom: 15,
                }}>
                {data.email}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            marginBottom: 10,
            backgroundColor: '#e2e2e2',
          }}
        />

        <View style={{width: '100%'}}>
          {items_tools.map((items_tools, key) => (
            <TouchableWithoutFeedback
              onPress={() => {
                global.currentScreenIndex = key;
                navigation.closeDrawer();
                setTimeout(() => {
                  if (items_tools.navOptionName === 'Log Out') {
                    clearUserSession();
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'Home'}],
                    });
                    navigation.navigate('Login');
                  } else {
                    navigation.navigate(items_tools.screenToNavigate);
                  }
                }, 100);
              }}
              key={key}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 15,
                  paddingBottom: 15,
                  backgroundColor: colors.white,
                }}>
                <ImageBackground
                  style={{width: 18, height: 19, marginLeft: 15}}
                  source={items_tools.navOptionThumb}>
                  <Text
                    style={{
                      fontSize: sizes.size_14,
                      alignItems: 'stretch',
                      marginLeft: 15,
                      fontWeight: '500',
                      flex: 1,
                      height: 18,
                      width: 400,
                      marginLeft: 50,
                      color:
                        global.currentScreenIndex === key
                          ? colors.main
                          : colors.black,
                    }}>
                    {items_tools.navOptionName}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
      <Text
        style={{
          fontSize: 12,
          alignItems: 'stretch',
          marginLeft: 15,
          fontWeight: '500',
          color: colors.border3,
          marginTop: 5,
          marginBottom: 5,
        }}>
        {constants.appVersion}
      </Text>
    </View>
  );
});
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: 0,
    overlayColor: '#6b52ae',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#000000',
    borderRadius: 100 / 2,
  },
  LoginHereButton: {
    color: '#5190c0',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  profileImgContainer: {
    width: 66,
    borderRadius: 33,
    borderWidth: 0,
    marginLeft: 15,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderColor: colors.white,
  },

  profileImg1: {
    marginLeft: 0,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapDispatchToProps = dispatch => ({
  clearUserSession: () => dispatch(CommonAction.clearUserSession()),
});
export default connect(null, mapDispatchToProps)(CustomSidebarMenu);
