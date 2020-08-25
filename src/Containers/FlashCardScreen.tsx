import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/FlashCardScreenStyle";
import Container from "../Components/Container";
import RNScrollView from "../Components/RNScrollView";
import { ScreenProps } from "../Types";
import FlashCard from "../Components/FlashCard";

export default function FlashCardScreen(props: ScreenProps): ReactElement {
  return (
    <Container style={styles.container} notSafeArea isPadding={false}>
      <RNScrollView>
        <FlashCard card={{ title: "Hello", description: "World" }} />
      </RNScrollView>
    </Container>
  );
}
