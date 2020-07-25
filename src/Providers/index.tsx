import React, { createContext, ReactElement, useReducer } from "react";
import { useActions } from "./Actions";
import { initialState, reducer } from "./Reducers";

export const AppContext = createContext({
  state: initialState,
  actions: useActions(initialState, () => {}),
  dispatch: () => {}
});

export default function AppProvider({ children }: any): ReactElement {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  return (
    // @ts-ignore
    <AppContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppContext.Provider>
  );
}
