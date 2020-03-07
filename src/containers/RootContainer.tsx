import { AppProvider } from "./AppProvider";
import React from "react";

interface Props {
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({ children }: Props): React.ReactElement => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootProvider;
