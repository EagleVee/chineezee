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
import RootNavigator from "./src/navigation";

const App: ReactNode = () => {
  return (
    <RootProvider>
      <RootNavigator />
    </RootProvider>
  );
};

export default App;
