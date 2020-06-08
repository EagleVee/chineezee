import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "../../config/Dimens";

export default StyleSheet.create({
  container: {
    width: 375 * WIDTH_RATIO,
    height: 350,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  previousContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  nextContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  sideButton: {
    paddingHorizontal: 20
  },
  webViewContainer: {
    width: deviceWidth - 100,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  resetButton: {
    padding: 10
  },
  reset: {
    width: 20,
    height: 20
  },
  sideIcon: {
    width: 10,
    height: 20
  }
});
