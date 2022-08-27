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
const FeedbackStatusComponent = memo(props => {
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
                    {'20190409072'}
                  </Text>
                </View>
              </View>
              <View style={styles.activeBack}>
                <Text style={styles.activeText}>{'Closed'}</Text>
              </View>
            </View>
            <View style={styles.divider}></View>

            <View style={styles.container2}>
              <View style={styles.container3}>
                <View>
                  <Text style={styles.textName}>{'Your Feedback'}</Text>
                  <Text style={styles.complaintNumberText}>
                    {'Satisfactory'}
                  </Text>
                </View>
              </View>
              <View style={styles.inactiveBack}>
                <Image source={Images.emoji} style={styles.logo} />
              </View>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.container2}>
              <View style={styles.container3}>
                <View>
                  <Text style={styles.textName}>{'Details'}</Text>
                  <Text style={styles.complaintNumberText}>
                    {'Good Support'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
});

export default FeedbackStatusComponent;
