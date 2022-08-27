import React from 'react';
import {colors, fonts, sizes} from '../utils/theme';
import {Images, Navigation} from '../../src/utils/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../components/CustomSidebarMenu/CustomSidebarMenu';
import SplashContainer from '../screens/Splash/SplashContainer';
import HomeContainer from '../screens/Home/HomeContainer';
import ProductDetailsContainer from '../screens/ProductDetails/ProductDetailsContainer';

const SplashStack = createStackNavigator();
const SplashScreen = () => (
  <SplashStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="SplashContainer">
    <SplashStack.Screen name="SplashContainer" component={SplashContainer} />
  </SplashStack.Navigator>
);

const DemoStack = createStackNavigator();

const DemoScreen = () => (
  <DemoStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeContainer">
    <DemoStack.Screen name="HomeContainer" component={HomeContainer} />
    <DemoStack.Screen name="ProductDetailsContainer" component={ProductDetailsContainer} />
  </DemoStack.Navigator>
);

const LoginStack = createStackNavigator();

const LoginScreen = () => (
  <LoginStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="LoginContainer">
    <LoginStack.Screen name="LoginContainer" component={LoginContainer} />
    <LoginStack.Screen name="RegisterContainer" component={RegisterContainer} />
  </LoginStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
    screenOptions={{headerShown: false}}
    drawerStyle={{width: '60%'}}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen
      options={{drawerType: 'front', drawerLabel: 'TabsScreen'}}
      name="TabsScreen"
      component={TabCombineScreen}
    />
    <Drawer.Screen
      options={{drawerType: 'front', drawerLabel: 'ShiftList'}}
      name="ShiftListScreen"
      component={ShiftListScreen}
    />
  </Drawer.Navigator>
);

const TabCombineStack = createStackNavigator();

const TabCombineScreen = () => (
  <TabCombineStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="TabsScreen">
    <TabCombineStack.Screen name="TabsScreen" component={TabsScreen} />
    <TabCombineStack.Screen
      name="NewComplaintContainer"
      component={NewComplaintContainer}
    />
    <TabCombineStack.Screen name="LoginContainer" component={LoginContainer} />
    <TabCombineStack.Screen
      name="RegisterContainer"
      component={RegisterContainer}
    />
    <TabCombineStack.Screen
      name="IntroductionContainer"
      component={IntroductionContainer}
    />
    <TabCombineStack.Screen
      name="ComplaintSuccessContainer"
      component={ComplaintSuccessContainer}
    />
  </TabCombineStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.main_color,
      tabBarInactiveTintColor: colors.black,
      tabBarStyle: {backgroundColor: colors.white},
      tabBarLabelStyle: {
        fontSize: sizes.small,
      },
    }}>
    <Tabs.Screen
      options={({route}) => ({
        activeTintColor: colors.main_color,
        inactiveTintColor: colors.black,
        style: {backgroundColor: colors.white},
        labelStyle: { fontSize: sizes.small},
        tabBarIcon: ({focused}) =>
          focused
            ? Navigation.Icon(Images.selected_home)
            : Navigation.Icon(Images.unselected_home),
        title: 'Home ',
      })}
      name="HomeContainer"
      component={DashBoardScreen}
    />
  </Tabs.Navigator>
);

const DashBoardStack = createStackNavigator();
const DashBoardScreen = () => (
  <DashBoardStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeContainer">
    <DashBoardStack.Screen name="HomeContainer" component={HomeContainer} />
  </DashBoardStack.Navigator>
);

const ClientInvoicesStack = createStackNavigator();
const ClientInvoicesScreen = () => (
  <ClientInvoicesStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="ClientInvoicesContainer">
    <ClientInvoicesStack.Screen
      name="ClientInvoicesContainer"
      component={ClientInvoicesContainer}
    />
    <ClientInvoicesStack.Screen
      name="CreateInvoiceContainer"
      component={CreateInvoiceContainer}
    />
    <ClientInvoicesStack.Screen
      name="CreateInvoiceSaveContainer"
      component={CreateInvoiceSaveContainer}
    />
    <ClientInvoicesStack.Screen
      name="InvoiceContainer"
      component={InvoiceContainer}
    />
  </ClientInvoicesStack.Navigator>
);

const RiskAssessmentListStack = createStackNavigator();
const RiskAssessmentListScreen = () => (
  <RiskAssessmentListStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="RiskAssessmentListContainer">
    <RiskAssessmentListStack.Screen
      name="RiskAssessmentListContainer"
      component={RiskAssessmentListContainer}
    />
    <RiskAssessmentListStack.Screen
      name="RiskAssessmentDetailContainer"
      component={RiskAssessmentDetailContainer}
    />
  </RiskAssessmentListStack.Navigator>
);

const StaffInvoiceStack = createStackNavigator();
const StaffInvoiceScreen = () => (
  <StaffInvoiceStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="StaffInvoiceContainer">
    <StaffInvoiceStack.Screen
      name="StaffInvoiceContainer"
      component={StaffInvoiceContainer}
    />
    <StaffInvoiceStack.Screen
      name="InvoiceDetailsContainer"
      component={InvoiceDetailsContainer}
    />
  </StaffInvoiceStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={SplashScreen}>
    <RootStack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Demo"
      component={DemoScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Home"
      component={DemoScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </RootStack.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
export default AppNavigator;
