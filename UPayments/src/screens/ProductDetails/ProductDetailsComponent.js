import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import { Images, colors } from '../../utils/theme';
import { ScrollView } from 'react-native-gesture-handler';
const ProductDetailsComponent = memo(props => {
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
        <View style={styles.imageBg}>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: props.screenData.productDetail.avatar }}
        />
        </View>
        <View  style ={styles.textBack}>
        <Text style={styles.textName}>{props.screenData.productDetail.name}</Text>
        <Text style={styles.textPrice}>{props.screenData.productDetail.description}</Text>
        </View>
    </View>

  );
});

export default ProductDetailsComponent;
