import React, {memo} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/theme';
const ComplaintStatusComponent = memo(props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafeArea}>
        <View>
          <View style={styles.item}>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <View>
                  <Text style={styles.textName}>{'Complaint Number'}</Text>
                  <Text style={styles.complaintNumberText}>
                    {props.data?.complaintNo}
                  </Text>
                </View>
              </View>
              <View style={styles.activeBack}>
                <Text style={styles.activeText}>{'Pending'}</Text>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => props.checkStatusButtonPress()}
            style={styles.buttonBackStyle1}>
            <Text style={styles.buttonTextStyle1}>Submit Feedback</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </View>
  );
});

export default ComplaintStatusComponent;
