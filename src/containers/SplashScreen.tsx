import SplashScreen from "react-native-splash-screen";
import React, {ReactElement} from "react";
import {View, Image} from "react-native";
import {Colors} from "../themes";
// @ts-ignore
import Icon from "react-native-vector-icons/Fontisto";

interface Props {
  navigation: any;
}

export default function Screen(props: Props): ReactElement {
  props.navigation.navigate("AppTab");
  return (
    <View style={styles.container}>
      <Icon name="language" color={Colors.twitterNightMode} size={30}/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.twitterNightMode,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
};
