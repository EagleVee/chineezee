import React, { ReactElement, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

import styles from "./styles/StrokeOrderScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";
import ChineseCharacter from "../components/ChineseCharacter";
import IconLeft from "../resources/images/icons/icon_arrow_left.png";
import IconRight from "../resources/images/icons/icon_arrow_right.png";
import RNScrollView from "../components/RNScrollView";
import Dictionary from "../resources/dictionary.json";

const CHINESE_REGEX = /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/g;
interface Props {
  navigation: any;
}

function StrokeOrderScreen(props: Props): ReactElement {
  const [input, setInput] = useState("");
  const [data, setData] = useState([""]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function showCharacter() {
    Keyboard.dismiss();
    const data = input.match(CHINESE_REGEX);
    if (data && data.length > 0) {
      setData(data);
      setCurrentIndex(0);
    }
  }

  function renderCharacter(): ReactElement {
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
        <ChineseCharacter character={data[currentIndex]}/>
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

  return (
    <Container style={styles.container}>
      <RNScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={i18n.t("stroke-placeholder")}
            onChangeText={text => {
              setInput(text);
            }}
            multiline
          />
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={showCharacter}>
          <Text style={styles.confirmText}>{i18n.t("confirm")}</Text>
        </TouchableOpacity>
        {renderCharacter()}
      </RNScrollView>
    </Container>
  );
}

export default StrokeOrderScreen;
