import React, { ReactElement, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/StrokeOrderScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";
import ChineseCharacter from "../components/ChineseCharacter";

interface Props {
  navigation: any;
}

function StrokeOrderScreen(props: Props): ReactElement {
  return (
    <Container style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>{i18n.t("hello-world")}</Text>
        <ChineseCharacter character="性" />
      </View>
    </Container>
  );
}

function drawLine(line: number, space: number) {
  if (line === 1) {
    return "*"
  }


}

export default StrokeOrderScreen;
