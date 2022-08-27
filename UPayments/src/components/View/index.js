import React, {memo} from 'react';
import {
  View as RNView,
  StyleSheet,
  SafeAreaView as SafeAreaViewRN,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';

const SafeView = memo(({children, ...rest}) =>
  rest.forceInset ? (
    <SafeAreaView {...rest}>{children}</SafeAreaView>
  ) : (
    <SafeAreaViewRN {...rest}>{children}</SafeAreaViewRN>
  ),
);

const View = memo((props) => {
  const {
    children,
    style: inputStyle,
    darkMode,
    color,
    transparent,
    row,
    center,
    safe,
    copilot,
    ...extraProps
  } = props;

  const style = StyleSheet.flatten(inputStyle) || {};
  const getBgColor = () => {
    if (transparent) {
      return 'transparent';
    }
    return color || (style && style.backgroundColor) || 'transparent';
  };

  const styleOverrides = {backgroundColor: getBgColor()};
  if (row) {
    styleOverrides.flexDirection = 'row';
  }
  if (center) {
    styleOverrides.alignItems = 'center';
  }

  const combinedStyles = StyleSheet.flatten([style, styleOverrides]);
  return safe ? (
    <SafeView style={combinedStyles} {...extraProps}>
      <RNView style={combinedStyles} {...extraProps} {...copilot}>
        {children}
      </RNView>
    </SafeView>
  ) : (
    <RNView style={combinedStyles} {...extraProps} {...copilot}>
      {children}
    </RNView>
  );
});

View.propTypes = {
  darkMode: PropTypes.bool,
  transparent: PropTypes.bool,
  row: PropTypes.bool,
  center: PropTypes.bool,
  color: PropTypes.string,
  safe: PropTypes.bool,
};

View.defaultProps = {
  darkMode: false,
  color: 'default',
  transparent: false,
  row: false,
  center: false,
  safe: false,
};

export default View;
