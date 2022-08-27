import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from '../../navigators';
import styles from './styles';

class RootScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#003366"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <AppNavigator />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
