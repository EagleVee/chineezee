import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles/HomeScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";

const HomeScreen = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>{i18n.t("hello-world")}</Text>
      </View>
    </Container>
  );
};

export default HomeScreen;
