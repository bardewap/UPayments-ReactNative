import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';
import { sizes } from '../../utils/sizes';
import { Images, colors } from '../../utils/theme';
import { globalStyles } from '../../utils/theme';

const CreateProductComponent = memo(props => {

  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={styles.item1} onPress={() => props.getSortResult(item)} >
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View style={globalStyles.containerStylesText}>
          <TextInput placeholderTextColor={colors.textPlaceholder}
            placeholder={"Please Enter Product Title"}
            style={globalStyles.inputStylesText11}
            value={props.firstName}
            onChangeText={value => {
              props.setFirstNameData(value);
            }}
          >
          </TextInput>
          <Text style={globalStyles.labelStylesText}>{"Product Title"}</Text>
        </View>
        <View style={globalStyles.containerStylesText}>
          <TextInput placeholderTextColor={colors.textPlaceholder}
            placeholder={"Please Enter Price"}
            style={globalStyles.inputStylesText11}
            value={props.firstName}
            onChangeText={value => {
              props.setFirstNameData(value);
            }}
          >
          </TextInput>
          <Text style={globalStyles.labelStylesText}>{"Price"}</Text>
        </View>
        <View style={globalStyles.containerStylesText}>
          <TextInput placeholderTextColor={colors.textPlaceholder}
            placeholder={"Please Enter Description"}
            style={globalStyles.inputStylesText11}
            value={props.firstName}
            onChangeText={value => {
              props.setFirstNameData(value);
            }}
          >
          </TextInput>
          <Text style={globalStyles.labelStylesText}>{"Description"}</Text>
        </View>
        <View style={globalStyles.containerStylesText}>
          <TextInput placeholderTextColor={colors.textPlaceholder}
            placeholder={"Please provide Image Link"}
            style={globalStyles.inputStylesText11}
            value={props.firstName}
            onChangeText={value => {
              props.setFirstNameData(value);
            }}
          >
          </TextInput>
          <Text style={styles.header}>{"Select Category"}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ alignContent: 'center', alignItems: 'center' }}
            data={props.sort}
            renderItem={renderItem1}
            keyExtractor={(item, index) => index}
          />

        </View>



      </ScrollView>
    </View>

  );
});

export default CreateProductComponent;