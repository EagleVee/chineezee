import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/WordDetailScreenStyle";
import Container from "../Components/Container";
import RNScrollView from "../Components/RNScrollView";
import CVHeader from "../Components/CVHeader";

interface Props {
  navigation: any;
}

export default function WordDetailScreen(props: Props): ReactElement {
  const { navigation } = props;
  return (
    <Container style={styles.container} notSafeArea isPadding={false}>
      <CVHeader
        leftOnPress={() => {
          navigation.goBack();
        }}
      />
      <RNScrollView>
        <View style={styles.middle}>
          <Text style={styles.construction}>
            Chưa có đâu các fen, đợi sau đê =))
          </Text>
        </View>
      </RNScrollView>
    </Container>
  );
}
