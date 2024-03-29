import React, { ReactElement } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking
} from "react-native";
import Container from "../Components/Container";
import styles from "./Styles/AboutScreenStyle";
import i18n from "i18n-js";
import CVHeader from "../Components/CVHeader";

interface Props {
  navigation: any;
}

function AboutScreen(props: Props): ReactElement {
  const { navigation } = props;
  return (
    <Container style={styles.container} isPadding={false} notSafeArea>
      <CVHeader
        title={i18n.t("about")}
        leftOnPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.name}>Nguyễn Ngọc Anh Vũ (阮玉英武)</Text>
          <Text style={styles.body}>{i18n.t("contact")}</Text>
          <Text style={styles.body}>
            E-mail:{" "}
            <Text style={styles.bodyLink} selectable>
              nnavu1@gmail.com
            </Text>
          </Text>
          <Text style={styles.body}>
            Telegram:{" "}
            <Text style={styles.bodyLink} selectable onPress={goToTelegram}>
              t.me/@eaglevee
            </Text>
          </Text>
          <Text style={styles.body}>
            Github:{" "}
            <Text style={styles.bodyLink} selectable onPress={goToGithub}>
              github.com/eaglevee
            </Text>
          </Text>
          <Text style={styles.body}>
            LinkedIn:{" "}
            <Text style={styles.bodyLink} selectable onPress={goToLinkedIn}>
              linkedin.com/in/nnavu
            </Text>
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
}

function goToGithub() {
  Linking.openURL("https://github.com/eaglevee");
}

function goToTelegram() {
  Linking.openURL("https://t.me/@eaglevee");
}

function goToLinkedIn() {
  Linking.openURL("https://www.linkedin.com/in/nnavu/");
}

export default AboutScreen;
