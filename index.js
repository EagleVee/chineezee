/**
 * @format
 */

import { name as appName } from "./app.json";

import { AppRegistry, YellowBox } from "react-native";
import App from "./App";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Module RCTImageLoader",
  "Remote debugger",
]);

AppRegistry.registerComponent(appName, () => App);
