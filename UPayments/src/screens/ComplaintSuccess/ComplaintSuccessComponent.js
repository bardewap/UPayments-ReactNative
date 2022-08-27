import React, {memo} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/theme';
const ComplaintSuccessComponent = memo(props => {
  function EmptyCart() {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyContainer1}>
          <Image
            source={Images.complaint_success}
            style={styles.emptyCartStyle}></Image>
          {/* <Text style={styles.emptyContainerTextBold}>{"Success"}</Text> */}
          <Text style={styles.emptyContainerText}>
            {
              'Your request is successfully recorded.\n Your CCR number is:'+props.screenData.complaintNo+'\n Confirmation email is send to you.'
            }
          </Text>

          <TouchableOpacity
            onPress={() => props.checkStatusButtonPress()}
            style={styles.buttonBackStyle1}>
            <Text style={styles.buttonTextStyle1}>Check Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafeArea}>
        {EmptyCart()}
      </SafeAreaView>
    </View>
  );
});

export default ComplaintSuccessComponent;
