import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Images, colors, NavgationStyles, fonts} from '../../utils/theme';

function LogoTitle1(navigation) {
  return (
    <View style={NavgationStyles.centerView}>
      <Text style={NavgationStyles.text}>
        {navigation.titleString ? navigation.titleString : ''}
      </Text>
    </View>
  );
}
const Icon = image => {
  return <Image source={image} style={NavgationStyles.bottomTab} />;
};

const setNavigation3 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.menuButtonPress()}>
          <Image source={Images.menu} style={NavgationStyles.menuButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.main,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerTintColor: colors.main,
    headerShown: true,
  });
};

const setNavigation5 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.goBackPress()}>
          <Image source={Images.back_ic} style={NavgationStyles.backButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.main,
    },
    headerTintColor: colors.main,
    headerShown: true,
  });
};
const setNavigation6 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerRight: () => (
      <View style={NavgationStyles.rightView}>
        <TouchableWithoutFeedback onPress={() => navigation.addButtonPress()}>
          <View>
            <Image
              source={Images.ic_edit_profile}
              style={NavgationStyles.settingButton}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    ),
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.menuButtonPress()}>
          <Image source={Images.menu} style={NavgationStyles.menuButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.main,
    },
    headerTintColor: colors.main,
    headerShown: true,
  });
};
const setNavigation7 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.menuButtonPress()}>
          <Image source={Images.menu} style={NavgationStyles.menuButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerRight: () => (
      <View style={NavgationStyles.rightView}>
        <TouchableWithoutFeedback onPress={() => navigation.addButtonPress()}>
          <View>
            <Image source={Images.add} style={NavgationStyles.addButton} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.addButtonPress()}>
          <View>
            <Text style={NavgationStyles.text_right}>{'Add shift'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.main,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerTintColor: colors.main,
    headerShown: true,
  });
};

const setNavigation8 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerRight: () => (
      <View style={NavgationStyles.rightView}>
        <TouchableWithoutFeedback onPress={() => navigation.addButtonPress()}>
          <View>
            <Image
              source={Images.add_icon}
              style={NavgationStyles.settingButton}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    ),
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.goBackPress()}>
          <Image source={Images.back_ic} style={NavgationStyles.menuButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.main,
    },
    headerTintColor: colors.main,
    headerShown: true,
  });
};

const setNavigation9 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerLeft: () => (
      <View style={NavgationStyles.leftView}>
        <TouchableWithoutFeedback onPress={() => navigation.goBackPress()}>
          <Image source={Images.back_ic} style={NavgationStyles.backButton} />
        </TouchableWithoutFeedback>
      </View>
    ),
    headerStyle: {
      // backgroundColor: colors.white,
    },
    headerShown: true,
    headerTransparent: true,
  });
};
const setNavigation10 = navigation => {
  navigation.setOptions({
    headerTitle: props => <LogoTitle1 {...navigation} />,
    headerStyle: {
      backgroundColor: colors.main,
    },
    headerShown: false,
    headerTransparent: true,
  });
};

export default {
  setNavigation3,
  setNavigation5,
  setNavigation6,
  setNavigation7,
  setNavigation8,
  setNavigation9,
  setNavigation10,
  Icon,
};
