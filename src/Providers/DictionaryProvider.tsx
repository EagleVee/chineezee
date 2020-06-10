import initialState, {
  DictionaryReducer,
  SetDictionaryAction,
  StateProps,
  SetSimplifiedWordsAction,
  SetTraditionalWordsAction
} from "../ReduxHooks/DictionaryRedux";
import React, {
  createContext,
  useReducer,
  Dispatch,
  Reducer,
  ReactNode
} from "react";
import API from "../API";
import { Action } from "../Types";

export const DictionaryContext = createContext({} as IContextProps);
export const DictionaryProvider = DictionaryContext.Provider;

interface Props {
  children?: ReactNode;
}

interface IContextProps {
  state: StateProps;
  dispatch: Dispatch<Action>;
  setSimplifiedWords: (words: string[]) => {};
  setTraditionalWords: (words: string[]) => {};
  setDictionary: (dictionary: object) => {};
}

export default function Wrapper(props: Props) {
  const [state, dispatch] = useReducer<Reducer<StateProps, Action>>(
    DictionaryReducer,
    initialState
  );
  const value: IContextProps = {
    state: state,
    dispatch: dispatch,
    setSimplifiedWords: setSimplifiedWords(dispatch),
    setTraditionalWords: setTraditionalWords(dispatch),

    setDictionary: setDictionary(dispatch)
  };
  return (
    <DictionaryProvider value={value}>{props.children}</DictionaryProvider>
  );
}

const setSimplifiedWords = (
  dispatch: Dispatch<SetSimplifiedWordsAction>
) => async (words: string[]) => {
  dispatch({
    type: "SET_SIMPLIFIED_WORDS",
    payload: words
  });
};

const setTraditionalWords = (
  dispatch: Dispatch<SetTraditionalWordsAction>
) => async (words: string[]) => {
  dispatch({
    type: "SET_TRADITIONAL_WORDS",
    payload: words
  });
};

const setDictionary = (dispatch: Dispatch<SetDictionaryAction>) => async (
  dictionary: object
) => {
  dispatch({
    type: "SET_DICTIONARY",
    payload: dictionary
  });
};
