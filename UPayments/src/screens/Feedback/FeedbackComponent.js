import React, {memo} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import {Images, colors} from '../../utils/theme';
const FeedbackComponent = memo(props => {
  const renderItem = ({item}) => (
    <View style={styles.itemBackStyle}>
      <TouchableOpacity onPress={() => props.ItemButtonPress(item)}>
        <Image source={item.image} style={styles.ImageStyle} />
      </TouchableOpacity>
      <Text style={styles.textMain}>{item.title}</Text>
    </View>
  );
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Very Poor',
      image: Images.very_poor_emoji,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Poor',
      image: Images.poor_emoji,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Satisfactory',
      image: Images.satisfactory_emoji,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29',
      title: 'Very Good',
      image: Images.very_good_emoji,
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455729',
      title: 'Excellent',
      image: Images.excellent_emoji,
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.emptyContainer1}>
          <Image source={Images.feedback} style={styles.emptyCartStyle}></Image>
          {/* <Text style={styles.emptyContainerTextBold}>{"Success"}</Text> */}
          <Text style={styles.HedingText}>Select your feedback*</Text>

          <View style={styles.chipSection}>
            <FlatList
              data={DATA}
              horizontal={true}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
          </View>

          <Text style={styles.HedingText}>Comment</Text>
          <View style={{marginTop: 5}}>
            <TextInput
              onChangeText={value => {
                props.setCommentData(value);
              }}
              placeholder="Please Provide your comments"
              value={props.InvoiceNumber}
              contextMenuHidden={true}
              autoCapitalize="none"
              maxLength={50}
              keyboardType="numeric"
              placeholderTextColor={colors.hint_color}
              style={styles.inputText}
            />
          </View>
          <View style={styles.divider}></View>

          <TouchableOpacity
            onPress={() => props.checkStatusButtonPress()}
            style={styles.buttonBackStyle1}>
            <Text style={styles.buttonTextStyle1}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
});

export default FeedbackComponent;
