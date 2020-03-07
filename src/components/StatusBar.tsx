import React from "react";
import { StatusBar, View, Platform } from "react-native";
import PropTypes from "prop-types";
import { STATUS_BAR_HEIGHT } from "../config/Dimens";

const Statusbar = ({
  backgroundColor = "transparent",
  content = "dark-content",
  translucent = true,
  height = STATUS_BAR_HEIGHT,
}) => {
  const bg = Platform.OS === "android" ? backgroundColor : backgroundColor;
  const iOsBackgroundColor = Platform.OS === "android" ? "transparent" : bg;

  return (
    <View
      style={{
        height: height,
        backgroundColor: iOsBackgroundColor,
      }}>
      <StatusBar backgroundColor={bg} translucent={translucent} />
    </View>
  );
};

export default Statusbar;
