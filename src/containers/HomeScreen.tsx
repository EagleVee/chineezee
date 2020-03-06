import React, {ReactNode} from "react";
import {View, Text} from "react-native";

import styles from "./styles/HomeScreenStyle";
import Container from "../components/Container";

export default class HomeScreen extends React.Component {
  render(): ReactNode {
    return (
      <Container style={styles.container}>
        <View style={styles.middle}>
          <Text style={styles.title}>Hello World</Text>
        </View>
      </Container>
    );
  }
}
