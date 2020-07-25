import DictionaryActions from "./DictionaryActions";
import { initialState } from "../Reducers";

export function useActions(state = initialState, dispatch = () => {}) {
  return {
    dictionary: DictionaryActions(state.dictionary, dispatch)
  };
}
