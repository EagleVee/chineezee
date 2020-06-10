import { Dimensions, Platform, StatusBar } from "react-native";
import DeviceInfo from "react-native-device-info";

const NORMAL_STATUS_BAR_HEIGHT =
  Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const NOTCH_STATUS_BAR_HEIGHT = 44;

export const hasNotch = DeviceInfo.hasNotch();

export const STATUS_BAR_HEIGHT = Number(
  hasNotch ? NOTCH_STATUS_BAR_HEIGHT : NORMAL_STATUS_BAR_HEIGHT
);

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

const baseWidth = 375;
const baseHeight = 812;

export const WIDTH_RATIO = deviceWidth / baseWidth;

console.log("BASE WIDTH:", baseWidth);
console.log("BASE HEIGHT:", baseHeight);
console.log("HAS NOTCH:", hasNotch);
console.log("DEVICE WIDTH:", deviceWidth);
console.log("DEVICE HEIGHT:", deviceHeight);
console.log("WIDTH RATIO:", WIDTH_RATIO);

export const EXTRA_HEADER_HEIGHT = hasNotch ? NOTCH_STATUS_BAR_HEIGHT : 0;
