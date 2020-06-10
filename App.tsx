import React from "react";
import { ReactNode } from "react";

import RootProvider from "./src/Containers/RootContainer";
import AppNavigation from "./src/Navigation/AppNavigation";

const App: ReactNode = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
