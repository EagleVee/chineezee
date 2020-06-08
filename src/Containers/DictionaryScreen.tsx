import React, { ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Styles/StrokeOrderScreenStyle";
import Container from "../Components/Container";
import i18n from "i18n-js";

interface Props {
  navigation: any;
}

function DictionaryScreen(props: Props): ReactElement {
  return (
    <Container style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>{i18n.t("constructing")}</Text>
      </View>
    </Container>
  );
}

function renderButton(props: any): ReactElement {
  const { navigation } = props;
  const [buttonText, setButtonText] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => {
        setButtonText(buttonText + 1);
      }}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
}

export default DictionaryScreen;
