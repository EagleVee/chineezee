import { Action } from "../Types";

export interface StateProps {
  simplifiedWords: string[];
  traditionalWords: string[];
  dictionary: object;
}

export const initialState: StateProps = {
  simplifiedWords: [],
  traditionalWords: [],
  dictionary: {}
};

export const DictionaryActions = {
  setTraditionalWords: "SET_TRADITIONAL_WORDS",
  setSimplifiedWords: "SET_SIMPLIFIED_WORDS",
  setDictionary: "SET_DICTIONARY"
};

export interface SetTraditionalWordsAction extends Action {
  type: "SET_TRADITIONAL_WORDS";
  payload: string[];
}

export interface SetSimplifiedWordsAction extends Action {
  type: "SET_SIMPLIFIED_WORDS";
  payload: string[];
}

export interface SetDictionaryAction extends Action {
  type: "SET_DICTIONARY";
  payload: object;
}

export const DictionaryReducer = (state: StateProps, action: Action) => {
  switch (action.type) {
    case DictionaryActions.setTraditionalWords:
      return { ...state, traditionalWords: action.payload };
    case DictionaryActions.setSimplifiedWords:
      return { ...state, simplifiedWords: action.payload };
    case DictionaryActions.setDictionary:
      return { ...state, dictionary: action.payload };
    default:
      return state;
  }
};

export default initialState;
