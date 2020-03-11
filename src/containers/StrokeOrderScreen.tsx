import React, { ReactElement, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/StrokeOrderScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";
import ChineseCharacter from "../components/ChineseCharacter";
import IconLeft from "../resources/images/icons/icon_arrow_left.png";
import IconRight from "../resources/images/icons/icon_arrow_right.png";

interface Props {
  navigation: any;
}

function StrokeOrderScreen(props: Props): ReactElement {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  return (
    <Container style={styles.container}>
      <View style={styles.middle}>
        <TextInput
          placeholder={i18n.t("stroke-placeholder")}
          onChangeText={text => {
            setInput(text);
          }}
          onSubmitEditing={() => {
            setData(input);
          }}
        />
        {renderCharacter(data)}
      </View>
    </Container>
  );
}

function renderCharacter(input: string): ReactElement {
  const data = input.split("");
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.strokeContainer}>
      <View style={styles.previousContainer}>
        <TouchableOpacity
          onPress={() => {
            const previousIndex = currentIndex - 1;
            if (previousIndex >= 0) {
              setCurrentIndex(previousIndex);
            }
          }}
          style={styles.sideButton}>
          <Image
            source={IconLeft}
            style={styles.sideIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ChineseCharacter character={data[currentIndex]} />
      <View style={styles.nextContainer}>
        <TouchableOpacity
          onPress={() => {
            const nextIndex = currentIndex + 1;
            if (nextIndex <= data.length - 1) {
              setCurrentIndex(nextIndex);
            }
          }}
          style={styles.sideButton}>
          <Image
            source={IconRight}
            style={styles.sideIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StrokeOrderScreen;
