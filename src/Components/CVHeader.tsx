import React, { ReactElement, ReactNode } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/CVHeaderStyle";
import PropTypes from "prop-types";
import IconBack from "../Resources/Images/Icons/icon_arrow_left.png";

interface Props {
  containerStyle?: object | [];
  leftType?: "back" | "close" | "none";
  renderLeft?: ReactNode;
  leftOnPress?: () => void;
  renderCenter?: ReactNode;
  title?: string;
  rightType?: "none";
  rightOnPress?: () => void;
  renderRight?: ReactNode;
}

export default function CVHeader(props: Props): ReactElement {
  const { containerStyle } = props;
  const style = containerStyle
    ? [styles.container, containerStyle]
    : styles.container;

  function renderLeftHeader() {
    const { renderLeft, leftType, leftOnPress } = props;
    const left = leftType ? leftType : "back";
    const icon = {
      back: IconBack,
      close: IconBack,
      none: IconBack,
      default: IconBack
    };
    return renderLeft ? (
      renderLeft
    ) : leftType === "none" ? (
      <View style={styles.headerLeft} />
    ) : (
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={leftOnPress} style={styles.leftButton}>
          <Image
            source={icon[left] ? icon[left] : icon.default}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderCenterHeader() {
    const { renderCenter, title } = props;
    return renderCenter ? (
      renderCenter
    ) : (
      <View style={styles.headerCenter}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }

  function renderRightHeader() {
    const { renderRight, rightType, rightOnPress } = props;
    const right = rightType ? rightType : "none";
    const icon = {
      back: IconBack,
      close: IconBack,
      none: IconBack,
      default: IconBack
    };
    return renderRight ? (
      <View style={styles.headerRight}>{renderRight}</View>
    ) : rightType === "none" ? (
      <View style={styles.headerRight} />
    ) : (
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={rightOnPress} style={styles.rightButton}>
          <Image
            source={icon[right] ? icon[right] : icon.default}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={style}>
      {renderLeftHeader()}
      {renderCenterHeader()}
      {renderRightHeader()}
    </View>
  );
}

CVHeader.defaultProps = {
  onPress: () => {},
  title: "",
  leftType: "back",
  rightType: "none"
};
