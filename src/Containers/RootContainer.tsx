import React, { useState } from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import { I18nManager } from "react-native";
import AppProvider from "../Providers";

const translationGetters = {
  vi: () => require("../Translations/vi.json"),
  en: () => require("../Translations/en.json")
};

import cedict from "../Resources/cedict.json";

interface Props {
  children?: React.ReactElement;
}

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  I18nManager.forceRTL(isRTL);

  // set i18n-js Config
  i18n.translations = {
    // @ts-ignore
    [languageTag]: translationGetters[languageTag]()
  };
  i18n.locale = languageTag;
};

// Add providers here
const RootProvider = ({ children }: Props): React.ReactElement => {
  setI18nConfig();
  // @ts-ignore
  return <AppProvider>{children}</AppProvider>;
};

export default RootProvider;
