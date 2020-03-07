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

const App: ReactNode = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
