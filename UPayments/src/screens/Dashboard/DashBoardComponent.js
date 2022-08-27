import React, {memo, useMemo} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {colors, Images} from '../../utils/theme';
import Loader from '../../components/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const DashBoardComponent = memo(props => {
  const DATA = [
    {
      id: '1',
      title: 'Gehlot Classes',
      image: '',
    },
    {
      id: '1',
      title: 'Gehlot Classes',
      image: '',
    },
    {
      id: '1',
      title: 'Gehlot Classes',
      image: '',
    },
    {
      id: '1',
      title: 'Gehlot Classes',
      image: '',
    },
    {
      id: '1',
      title: 'Gehlot Classes',
      image: '',
    },
  ];

  const renderLoader = () => <View style={styles.indicatorContainer}></View>;
  const renderEmptyView = ({item}) => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyContainerText}>{'No Client Found!'}</Text>
    </View>
  );

  const renderItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => {
        props.customercase(item);
      }}>
      <View style={styles.item}>
        <View style={styles.container4}>
          <View style={styles.container3}>
            <TouchableOpacity
              onPress={() => {
                props.editClient(item);
              }}>
              <Text style={styles.textName}>{'Fullname'}</Text>
            </TouchableOpacity>
          </View>
          {item.status == '1' ? (
            <View style={styles.activeBack}>
              <Text style={styles.activeText}>Active</Text>
            </View>
          ) : (
            <View style={styles.inactiveBack}>
              <Text style={styles.inactiveText}>Inactive</Text>
            </View>
          )}
          <View>
            {item.service_agreement == '' ? (
              <TouchableOpacity
                onPress={() => {
                  props.serviceAgreement(item);
                }}>
                <View style={styles.text_serviceAggBack}>
                  <Image
                    source={Images.add}
                    style={styles.text_serviceAggImage}
                  />
                  <Text style={styles.text_serviceAgg}>
                    {'Service\nAgreement'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  props.downloadAgreement(item);
                }}>
                <View style={styles.text_serviceAggBack}>
                  <Image
                    source={Images.eye}
                    style={styles.text_serviceAggImage}
                  />
                  <Text style={styles.text_serviceAgg}>
                    {'Service\nAgreement'}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.container4}>
          <View style={styles.container5}>
            <Text style={styles.text_large}>NDIS Number</Text>
            <Text style={styles.text_small}>{'1213313'}</Text>
            <View style={{height: 10}} />
            <Text style={styles.text_large}>Planner Email</Text>
            <Text style={styles.text_small}>{'pb@gmail.com'}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.addCaseAction(item);
            }}>
            <Image
              source={Images.add_case_selected}
              style={styles.imageMenuStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    props.pullToRefresh();
  }, []);

  const renderListHeader = useMemo(
    () => (
      <>
        <View safe style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.icon_view_container}>
              <Image source={Images.totalclientsIcon} style={styles.imageTop} />
            </View>
            <View style={styles.client_text_viewContainer}>
              <Text style={styles.textClient}>Total Clients</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.textInputValue}>{'12'}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.searchBackground}>
            <TextInput
              value={props.search}
              onChangeText={text => {
                props.searchData(text);
              }}
              placeholder="Search for client"
              placeholderTextColor={colors.placeholder}
              style={styles.inputText}></TextInput>
            <Image source={Images.search} style={styles.search_ic} />
          </View>
        </View>
      </>
    ),
    [props.searchData],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Loader loading={props.isLoading} />
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={renderListHeader}
          data={DATA}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            props.isLoading ? renderLoader() : renderEmptyView
          }
          onEndReachedThreshold={0.1}
          onEndReached={({}) => {
            props.callClientListApiCall();
          }}
        />
        {/* </KeyboardAwareScrollView> */}
      </SafeAreaView>
    </View>
  );
});

export default DashBoardComponent;
