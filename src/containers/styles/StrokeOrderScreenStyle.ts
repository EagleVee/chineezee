import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../themes";
import { deviceWidth } from "../../config/Dimens";

export default StyleSheet.create({
  ...ApplicationStyles,
  title: {
    textAlign: "center",
    color: "black",
  },
  strokeContainer: {
    width: deviceWidth,
    height: 350,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  previousContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  nextContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  sideButton: {
    paddingHorizontal: 20,
  },
  sideIcon: {
    width: 10,
    height: 20,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {},
});
