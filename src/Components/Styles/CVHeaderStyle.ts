import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes/index";
import { STATUS_BAR_HEIGHT, WIDTH_RATIO } from "../../Config/Dimens";

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flexDirection: "row",
    paddingTop: STATUS_BAR_HEIGHT + 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  headerLeft: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  leftButton: {
    paddingHorizontal: 10 * WIDTH_RATIO
  },
  icon: {
    width: 20,
    height: 20
  },
  headerRight: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10 * WIDTH_RATIO
  },
  rightButton: {
    paddingHorizontal: 10 * WIDTH_RATIO
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  }
});
