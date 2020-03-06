/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {ReactNode} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {AppProvider} from "./src/containers/AppProvider";
import RootProvider from "./src/containers/RootContainer";

const App: () => ReactNode = () => {
  return (
    <AppProvider>
      <RootProvider />
    </AppProvider>
  );
};

export default App;
