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
const HomeComponent = memo(props => {

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    props.pullToRefresh()
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const renderLoader = () => (
    <View style={styles.indicatorContainer}>
    </View>
  );
  const renderEmptyView = ({ item }) => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyContainerText}>{"No Product Found!"}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => props.itemDetailsButtonPress(item)}>
      <View>
        <View style={styles.imageBg}>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: item.avatar }}
        />
        </View>
        <View  style ={styles.textBack}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textPrice}>{"$ "+item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <FlatList
        style={styles.flatList}
        data={props.productList}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={props.isLoading ? renderLoader() : renderEmptyView}
      />
    </View>

  );
});

export default HomeComponent;
