import React, { ReactElement, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard
} from "react-native";

import styles from "./Styles/StrokeOrderScreenStyle";
import Container from "../Components/Container";
import i18n from "i18n-js";
import ChineseCharacter from "../Components/ChineseCharacter";
import IconLeft from "../Resources/Images/Icons/icon_arrow_left.png";
import IconRight from "../Resources/Images/Icons/icon_arrow_right.png";
import RNScrollView from "../Components/RNScrollView";
import Dictionary from "../Resources/dictionary.json";
import RNFS from "react-native-fs";

const CHINESE_REGEX = /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/g;
interface Props {
  navigation: any;
}

function StrokeOrderScreen(props: Props): ReactElement {
  const [input, setInput] = useState("");
  const [data, setData] = useState([""]);
  const [characterData, setCharaceterData] = useState([""]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function showCharacter() {
    Keyboard.dismiss();
    const data = input.match(CHINESE_REGEX);
    if (data && data.length > 0) {
      try {
        (async function() {
          let _characterData = [""];
          for (const index in data) {
            const character = data[index];
            const charCode = character.charCodeAt(0);
            const path = RNFS.DocumentDirectoryPath + "/" + charCode + ".svg";
            console.log("PATH", path);
            RNFS.read(path)
              .then(res => {
                _characterData.push(res);
              })
              .catch(e => {
                // @ts-ignore
                data.splice(index, 1);
                console.log(e);
              });
          }
          setData(data);
          setCharaceterData(_characterData);
          setCurrentIndex(0);
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {}, [data]);

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
        <ChineseCharacter
          character={data[currentIndex]}
          svg={characterData[currentIndex]}
        />
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

  function renderBriefDescription(character: string): ReactElement {
    let content = "";
    // @ts-ignore
    if (Dictionary[character]) {
      // @ts-ignore
      const characterObject = Dictionary[character];
      const { definition, pinyin } = characterObject;
      if (pinyin.length > 0) {
        content += "Pinyin: ";
        for (let i = 0; i < pinyin.length; i++) {
          content += pinyin[i];
          if (i === pinyin.length - 1) {
            content += "\n";
          } else {
            content += ", ";
          }
        }
      }

      content += "Definition: " + definition;
    }
    return (
      <View style={styles.definitionContainer}>
        <Text style={styles.definition}>{content}</Text>
      </View>
    );
  }

  return (
    <Container style={styles.tabContainer}>
      <RNScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
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
        {renderBriefDescription(data[currentIndex])}
      </RNScrollView>
    </Container>
  );
}

export default StrokeOrderScreen;
