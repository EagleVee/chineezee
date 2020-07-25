import {
  initialState as dictionary,
  DictionaryReducer
} from "./DictionaryReducer";
import { Action } from "../../Types";

export const initialState = {
  dictionary
};

export const reducer = (state = initialState, action: Action) => {
  return {
    dictionary: DictionaryReducer(state.dictionary, action)
  };
};
