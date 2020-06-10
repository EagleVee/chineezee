import { Platform, StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes/index";

export default StyleSheet.create({
  ...ApplicationStyles,
  title: {
    textAlign: "center",
    color: "black"
  },
  textInputContainer: {
    flex: 1,
    paddingRight: 10
  },
  textInputWrapper: {
    paddingHorizontal: 16,
    flexDirection: "row"
  },
  textInput: {
    fontSize: 16,
    borderRadius: 12,
    color: "white",
    backgroundColor: Colors.twitterInput,
    paddingHorizontal: 10,
    paddingVertical: Platform.select({
      ios: 10,
      android: 5
    })
  },
  resultContent: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  resultContainer: {
    paddingVertical: 8
  },
  word: {
    fontSize: 20,
    color: "white",
    fontWeight: "500"
  },
  definition: {
    marginTop: 4,
    fontSize: 14,
    color: "white"
  },
  pinyin: {
    marginTop: 4,
    fontSize: 16,
    color: "white"
  },
  divider: {
    height: 1,
    backgroundColor: "white",
    width: "100%"
  },
  changeButtonWrapper: {
    alignItems: "flex-end"
  },
  changeButtonContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.twitterBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3
  },
  changeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white"
  },
  changeButtonText: {
    marginTop: 5,
    fontSize: 12,
    color: "white"
  }
});
