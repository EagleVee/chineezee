import React, { ReactElement, useContext, useEffect } from "react";
import { View, Image } from "react-native";
import { Colors } from "../Themes/index";
// @ts-ignore
import Icon from "react-native-vector-icons/Fontisto";
import { DictionaryContext } from "../Providers/DictionaryProvider";
import simplified from "../Resources/simplified.json";
import traditional from "../Resources/traditional.json";

interface Props {
  navigation: any;
}

export default function SplashScreen(props: Props): ReactElement {
  const dictionaryContext = useContext(DictionaryContext);
  const { setTraditionalWords, setSimplifiedWords } = dictionaryContext;

  useEffect(() => {
    const startupDictionary = async (callback: () => void) => {
      const simplifiedWords = Object.keys(simplified);
      const traditionalWords = Object.keys(traditional);
      await setSimplifiedWords(simplifiedWords);
      await setTraditionalWords(traditionalWords);
      await callback();
    };

    startupDictionary(() => {
      props.navigation.navigate("AppTab");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="language" color={Colors.twitterNightMode} size={30} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.twitterNightMode,
    alignItems: "center" as const,
    justifyContent: "center" as const
  }
};
