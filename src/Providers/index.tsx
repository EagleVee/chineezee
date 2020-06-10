import React, { Dispatch, ReactNode } from "react";
import LanguageProvider from "./LanguageProvider";
import DictionaryProvider from "./DictionaryProvider";
import { Action } from "../Types";

export interface WithChildrenProps {
  children: ReactNode;
}

export function pack(
  children: ReactNode = null,
  ...components: any
): ReactNode {
  if (!components.length) {
    return children;
  }

  const [Component, ...rest] = components;

  return <Component>{pack(children, ...rest)}</Component>;
}

export function createPack(...components: any): ReactNode {
  return function PackComponent({ children }: WithChildrenProps): ReactNode {
    return pack(children, ...components);
  };
}

export default createPack(LanguageProvider, DictionaryProvider);
