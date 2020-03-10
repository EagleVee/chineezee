import React from "react";
import { View, Text } from "react-native";
import Svg from "react-native-svg";

interface Props {
  character: string;
}

function ChineseCharacter(props: Props) {
  const { character } = props;
  const characterUnicode = character.charCodeAt(0);
  console.log(characterUnicode);
  const fileName = characterUnicode + ".svg";
  const source = "../resources/svgs/" + fileName;

  return <View style={{ flex: 1 }}>
    <Svg />
  </View>;
}

export default ChineseCharacter;
