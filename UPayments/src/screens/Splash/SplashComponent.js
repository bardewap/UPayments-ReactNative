import React, {memo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const SplashComponent = memo(props => {
  return (
    <View safe style={styles.container}>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
});

export default SplashComponent;
