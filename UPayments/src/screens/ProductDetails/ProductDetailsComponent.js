import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';
const ProductDetailsComponent = memo(props => {
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.imageBg}>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: props.screenData.productDetail.avatar }}
        />
      </View>
      <View style={styles.textBack}>
        <View  style={{flexDirection:'row'}}>
          <Text style={styles.textName}>{props.screenData.productDetail.name}</Text>
          <Text style={styles.textPrice}>{"$ " + props.screenData.productDetail.price}</Text>
        </View>
        <Text style={styles.textdescription}>{props.screenData.productDetail.description}</Text> 
      </View>
  </ScrollView>
    </View>

  );
});

export default ProductDetailsComponent;
