import { Platform, StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes/index";
import { deviceWidth, WIDTH_RATIO } from "../../Config/Dimens";

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    ...ApplicationStyles.container,
    paddingTop: 10
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    fontWeight: "500"
  },
  strokeContainer: {
    width: deviceWidth,
    height: 310 * WIDTH_RATIO,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  previousContainer: {
    height: 250 * WIDTH_RATIO,
    alignItems: "center",
    justifyContent: "center"
  },
  nextContainer: {
    height: 250 * WIDTH_RATIO,
    alignItems: "center",
    justifyContent: "center"
  },
  sideButton: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  sideIcon: {
    width: 15,
    height: 30
  },
  flatList: {
    flex: 1
  },
  flatListContent: {},
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  input: {
    borderRadius: 12,
    backgroundColor: Colors.twitterInput,
    width: deviceWidth - 20,
    maxWidth: deviceWidth - 20,
    height: 120,
    paddingHorizontal: 10,
    paddingVertical: Platform.select({
      ios: 10,
      android: 5
    }),
    color: "white",
    textAlignVertical: "top",
    fontSize: 18
  },
  confirmButton: {
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.twitterBlue,
    borderRadius: 6
  },
  confirmText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500"
  },
  definitionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  definition: {
    fontSize: 16,
    color: "white"
  }
});
