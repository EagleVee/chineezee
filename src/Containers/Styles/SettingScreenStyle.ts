import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes";
import { WIDTH_RATIO } from "../../Config/Dimens";
export default StyleSheet.create({
  ...ApplicationStyles,
  listContainer: {
    paddingHorizontal: 10 * WIDTH_RATIO,
    paddingVertical: 10 * WIDTH_RATIO
  },
  button: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    marginLeft: 10,
    color: "white",
    fontSize: 20
  }
});
