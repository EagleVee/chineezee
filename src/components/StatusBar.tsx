import React from "react";
import { StatusBar, View, Platform } from "react-native";
import { STATUS_BAR_HEIGHT } from "../config/Dimens";

const Statusbar = ({
  backgroundColor = "transparent",
                     content = "light-content",
  translucent = true,
                     height = STATUS_BAR_HEIGHT
}) => {
  const bg = Platform.OS === "android" ? backgroundColor : backgroundColor;
  const iOsBackgroundColor = Platform.OS === "android" ? "transparent" : bg;
  if (content) {
    // @ts-ignore
    StatusBar.setBarStyle(content);
  }
  return (
    <View
      style={{
        height: height,
        backgroundColor: iOsBackgroundColor
      }}>
      <StatusBar backgroundColor={bg} translucent={translucent} />
    </View>
  );
};

export default Statusbar;
