import React, { ReactElement, useState, useEffect } from "react";
import { View, Text, Animated, TouchableWithoutFeedback } from "react-native";
import styles from "./Styles/FlashCardStyle";
import PropTypes from "prop-types";

interface Props {
  card: {
    title: string;
    description: string;
  };
}

export default class FlashCard extends React.PureComponent<Props> {
  private animatedValue: any;
  private frontInterpolate: any;
  private backInterpolate: any;
  private value = 0;
  constructor(props: Props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
    // @ts-ignore
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
  }

  componentWillUnmount() {
    this.animatedValue.removeAllListeners();
  }

  onPress = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  };

  render() {
    const { title, description } = this.props.card;
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={this.onPress}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text>{title}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            <Text>{description}</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
