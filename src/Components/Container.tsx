import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View
} from "react-native";
import styles from "./Styles/ContainerStyle";
import {STATUS_BAR_HEIGHT} from "../Config/Dimens";
import StatusBar from "./StatusBar";

class Container extends PureComponent<Props> {
  render() {
    const { props } = this;
    const {
      content,
      translucent,
      behavior,
      statusBarColor,
      style,
      notSafeArea,
      isPadding,
      paddingStyle
    } = props;

    const padding = isPadding ? paddingStyle : {};
    const height = notSafeArea ? 0 : STATUS_BAR_HEIGHT;

    return (
      <KeyboardAvoidingView
        behavior={behavior}
        style={[styles.container, style]}>
        <StatusBar
          height={height}
          backgroundColor={statusBarColor}
          content={content}
          translucent={translucent}
        />
        {notSafeArea ? (
          props.children
        ) : (
          <SafeAreaView style={[styles.container, padding]}>
            {props.children}
          </SafeAreaView>
        )}
      </KeyboardAvoidingView>
    );
  }
}

interface Props {
  content?: "dark-content";
  translucent?: false;
  behavior?: any;
  statusBarColor?: "transparent";
  style?: object;
  notSafeArea?: boolean;
  isPadding?: false;
  paddingStyle?: object;
  keyboardVerticalOffset?: number;
}

export default Container;
