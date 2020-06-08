import React, { ReactElement, useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";

import styles from "./styles/StrokeOrderScreenStyle";
import Container from "../components/Container";
import i18n from "i18n-js";
import {Player} from "@react-native-community/audio-toolkit";

interface Props {
  navigation: any;
}

function PronunciationScreen(props: Props): ReactElement {
  return (
    <Container style={styles.container}>
      <View style={styles.middle}>{renderAudioPlayer()}</View>
    </Container>
  );
}

function renderAudioPlayer() {
  const playSound = () => {
    const player = new Player("t_a4.mp3", {autoDestroy: true});
    console.log(player);
    player.play();
  };
  return (
    <View>
      <TouchableOpacity onPress={playSound}>
        <Text>TOUCH TO GET THE SOUND</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PronunciationScreen;
