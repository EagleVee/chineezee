import {StyleSheet} from "react-native";
import {ApplicationStyles, Colors} from "../../Themes/index";

export default StyleSheet.create({
  ...ApplicationStyles,
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 10,
    fontWeight: "500"
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    marginBottom: 10
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 15
  },
  body: {
    fontSize: 18,
    color: "white"
  },
  bodyLink: {
    fontSize: 18,
    color: Colors.twitterBlue,
    textDecorationLine: "underline"
  }
});
