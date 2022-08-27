import React from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/theme';
import Swiper from 'react-native-swiper';
import {colors} from '../../utils/theme';
const DemoComponent = props => {
  const nextButtonPress = () => {
    props.nextButtonPress();
  };
  const skipButtonPress = () => {
    props.skipButtonPress();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={{flex: 1}}>
          <View style={styles.container_slide}>
            <Swiper
              showsButtons={false}
              activeDotColor={colors.main_color}
              dotColor={colors.dot_color}>
              <View style={styles.slide1}>
                <Image style={styles.logo} source={Images.demoScreenImage} />
                <Text style={styles.DescText}>
                  Support Coordinators support persons through your NDIS plan{' '}
                </Text>
              </View>
              <View style={styles.slide2}>
                <Image style={styles.logo} source={Images.demoScreenImage1} />
                <Text style={styles.DescText}>
                  {
                    "I'ara will support you to understand \n your NDIS plan and assist you to find \n the right providers,  with the right\n services for you. "
                  }
                </Text>
              </View>
            </Swiper>
          </View>
          <View
            style={{
              margin: 30,
              height: 2,
              backgroundColor: colors.view_color,
              alignSelf: 'stretch',
            }}
          />
        </View>
        <View>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={() => skipButtonPress()}
              style={styles.buttonSkip}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nextButtonPress()}
              style={styles.buttonNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default DemoComponent;
