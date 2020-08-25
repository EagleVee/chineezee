import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flex: 1
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0
  }
});
