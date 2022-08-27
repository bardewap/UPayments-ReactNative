import React, {PureComponent, useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
const {width} = Dimensions.get('window');
import NetInfo from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const [isInternetReachbale, setInternetReachbale] = useState(null);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setInternetReachbale(state.isInternetReachable);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (isInternetReachbale || isInternetReachbale == null) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.offlineContainer}>
        <View style={styles.offlineContainer1}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  offlineContainer: {
    marginTop: Platform.OS == 'ios' ? 0 : 20,
    backgroundColor: '#b52424',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    position: 'absolute',
  },
  offlineContainer1: {
    backgroundColor: '#b52424',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? 0 : 10,
    paddingBottom: 10,
  },
  offlineText: {
    color: '#fff',
  },
});
export default OfflineNotice;
