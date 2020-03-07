// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  middle: ViewStyle;
  backgroundImage: ImageStyle;
}
export default StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
