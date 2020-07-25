import React, { ReactElement, useContext, useEffect } from "react";
import { View, Image } from "react-native";
import { Colors } from "../Themes/index";
// @ts-ignore
import Icon from "react-native-vector-icons/Fontisto";
import simplified from "../Resources/simplified.json";
import traditional from "../Resources/traditional.json";
import { AppContext } from "../Providers";

interface Props {
  navigation: any;
}

export default function SplashScreen(props: Props): ReactElement {
  const { state, dispatch, actions } = useContext(AppContext);

  useEffect(() => {
    const startupDictionary = (callback: () => void) => {
      try {
        (async function() {
          const simplifiedWords = Object.keys(simplified);
          const traditionalWords = Object.keys(traditional);
          await actions.dictionary.setSimplifiedWords(simplifiedWords);
          await actions.dictionary.setTraditionalWords(traditionalWords);
          await callback();
        })();
      } catch (e) {
        console.log(e);
        callback();
      }
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
