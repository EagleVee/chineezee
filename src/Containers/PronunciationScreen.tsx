import React, { ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Styles/StrokeOrderScreenStyle";
import Container from "../Components/Container";
import i18n from "i18n-js";
import { Player } from "@react-native-community/audio-toolkit";

interface Props {
  navigation: any;
}

function PronunciationScreen(props: Props): ReactElement {
  function renderAudioPlayer() {
    const playSound = () => {
      // const player = new Player("t_a4.mp3", { autoDestroy: true });
      // console.log(player);
      // player.play();
    };
    return (
      <View>
        <TouchableOpacity onPress={playSound}>
          <Text>TOUCH TO GET THE SOUND</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <Container style={styles.tabContainer}>
      <View style={styles.middle}>{renderAudioPlayer()}</View>
    </Container>
  );
}

export default PronunciationScreen;
