import { NativeModules, Platform } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
const { RNLocalResourceModule } = NativeModules;
const { OS } = Platform;

export function loadLocalRawResource(source) {
  const uri = getUriFromSource(source);
  if (OS === "android") {
    return loadAndroidRawResource(uri);
  } else {
    return loadResourceUsingFetch(uri);
  }
}

function getUriFromSource(source) {
  const resolvedAssetSource = resolveAssetSource(source);
  return resolvedAssetSource.uri;
}

async function loadAndroidRawResource(uri) {
  try {
    return await RNLocalResourceModule.getRawResource(uri);
  } catch (e) {
    console.error(
      "Error in RawResourceUtils while trying to natively load an Android raw resource: ",
      e,
    );
    return null;
  }
}

async function loadResourceUsingFetch(uri) {
  const blob = await fetch(uri);
  return await blob.text();
}
