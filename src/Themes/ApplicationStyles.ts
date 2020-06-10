// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { STATUS_BAR_HEIGHT } from "../Config/Dimens";
import { Colors } from "./index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.twitterNightMode
  },
  tabContainer: {
    flex: 1,
    backgroundColor: Colors.twitterNightMode,
    paddingTop: STATUS_BAR_HEIGHT + 10
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.twitterNightMode
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  row: {
    flexDirection: "row"
  }
});
