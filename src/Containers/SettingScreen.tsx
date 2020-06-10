import React, { ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./Styles/SettingScreenStyle";
import Container from "../Components/Container";
import RNScrollView from "../Components/RNScrollView";
// @ts-ignore
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import KeyExtractor from "../Common/KeyExtractor";
import i18n from "i18n-js";
interface Props {
  navigation: any;
}

export default function SettingScreen(props: Props): ReactElement {
  const { navigation } = props;
  const listSettings = [
    {
      title: i18n.t("about"),
      icon: <MaterialCommunityIcon name="account" size={30} color="white" />,
      onPress: () => {
        navigation.navigate("AboutScreen");
      }
    }
  ];
  // @ts-ignore
  function renderButton({ item }) {
    return (
      <TouchableOpacity style={styles.button} onPress={item.onPress}>
        {item.icon}
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Container style={styles.tabContainer} notSafeArea isPadding={false}>
      <RNScrollView>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
          data={listSettings}
          renderItem={renderButton}
          keyExtractor={KeyExtractor.extract}
        />
      </RNScrollView>
    </Container>
  );
}
