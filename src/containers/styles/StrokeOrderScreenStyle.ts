import { StyleSheet } from "react-native";
import {ApplicationStyles, Colors} from "../../themes";
import {deviceWidth, WIDTH_RATIO} from "../../config/Dimens";

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    ...ApplicationStyles.container,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  strokeContainer: {
    width: deviceWidth,
    height: 400 * WIDTH_RATIO,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  previousContainer: {
    height: 250 * WIDTH_RATIO,
    alignItems: "center",
    justifyContent: "center",
  },
  nextContainer: {
    height: 250 * WIDTH_RATIO,
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
  inputContainer: {
    height: 120,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.twitterInput,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  input: {
    width: "100%",
    maxWidth: "100%",
    height: 150,
    paddingHorizontal: 10,
    color: "white",
    fontSize: 18,
  },
  confirmButton: {
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.twitterBlue,
    borderRadius: 6,
  },
  confirmText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
});
