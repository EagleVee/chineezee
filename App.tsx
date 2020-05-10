/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { ReactNode } from "react";

import RootProvider from "./src/containers/RootContainer";
import AppNavigation from "./src/navigation/AppNavigation";
import SplashScreen from "react-native-splash-screen";

const App: ReactNode = () => {
  SplashScreen.hide();
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
