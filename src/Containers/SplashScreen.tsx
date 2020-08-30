import React, { ReactElement, useContext, useEffect } from "react";
import { View, Image } from "react-native";
import { StackActions } from "@react-navigation/native";
import { Colors } from "../Themes/index";
// @ts-ignore
import Icon from "react-native-vector-icons/Fontisto";
import simplified from "../Resources/simplified.json";
import traditional from "../Resources/traditional.json";
import { AppContext } from "../Providers";
import { ScreenProps } from "../Types";
import { LocalStorage } from "../Common/LocalStorage";

export default function SplashScreen(props: ScreenProps): ReactElement {
  const { navigation } = props;
  const { state, dispatch, actions } = useContext(AppContext);

  const goToApp = () => {
    navigation.dispatch(StackActions.replace("AppTab"));
  };

  useEffect(() => {
    const startupDictionary = () => {
      try {
        (async function() {
          const simplifiedWords = Object.keys(simplified);
          const traditionalWords = Object.keys(traditional);
          await actions.dictionary.setSimplifiedWords(simplifiedWords);
          await actions.dictionary.setTraditionalWords(traditionalWords);
          await goToApp();
        })();
      } catch (e) {
        console.log(e);
        goToApp();
      }
    };

    startupDictionary();
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
