import { StyleSheet } from "react-native";
import {ApplicationStyles, Colors} from "../../themes";
import { deviceWidth } from "../../config/Dimens";

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    ...ApplicationStyles.container,
    paddingTop: 10,
  },
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
  inputContainer: {
    height: 150,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#c1c1c1",
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.bootstrapSuccess,
    borderRadius: 4,
  },
  confirmText: {
    fontSize: 16,
    color: "white",
  },
});
