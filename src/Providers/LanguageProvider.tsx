import initialState, {
  LanguageReducer,
  LanguageActions
} from "../ReduxHooks/LanguageRedux";
import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer
} from "react";
import API from "../API";
import { Action } from "../Types";

export const LanguageContext = createContext({});
export const LanguageProvider = LanguageContext.Provider;

interface Props {
  children?: ReactNode;
}

export default function Wrapper(props: Props): ReactElement {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <LanguageProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </LanguageProvider>
  );
}

export const mapActionsToDispatch = (dispatch: Dispatch<Action>): object => {
  return {
    doSomething: doSomething(dispatch)
  };
};

const doSomething = (dispatch: Dispatch<Action>) => async () => {};
