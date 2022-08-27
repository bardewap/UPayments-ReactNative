import {StackActions} from '@react-navigation/native';
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

let navigator;

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */

export function navigate(routeName, params) {
  navigator.current?.navigate(routeName, params);
}

/**
 * Call this function when you want to push to a specific route.
 *
 * @param args args parameters.
 */
export function push(...args) {
  navigator.current?.dispatch(StackActions.push(...args));
}

export default {
  navigate,
  push,
  setTopLevelNavigator,
};
