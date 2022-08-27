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
  const actionsPolls = [

    {
      text: "Create",
      icon: Images.delete,
      name: "bt_create",
      distanceToEdge: 10,
      buttonSize: 40,
      margin: 10,
    }
  ];
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


  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={styles.item1} onPress={() => props.getSortResult(item)} >
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
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
        <View style={styles.textBack}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textPrice}>{"$ " + item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ alignContent: 'center', alignItems: 'center' }}
        data={props.sort}
        renderItem={renderItem1}
        keyExtractor={(item, index) => index}
      />

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

      <TouchableOpacity onPress={() => props.createButtonPress()} style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <View >
          <Image
            style={styles.icon}
            source={Images.add}
          />
        </View>
      </TouchableOpacity>
    </View>

  );
});

export default HomeComponent;
