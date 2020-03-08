import React, { ReactElement, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/StrokeOrderScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";

interface Props {
  navigation: any;
}

function StrokeOrderScreen(props: Props): ReactElement {
  return (
    <Container style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>{i18n.t("hello-world")}</Text>
      </View>
    </Container>
  );
}

export default StrokeOrderScreen;
