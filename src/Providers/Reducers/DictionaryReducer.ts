import { Action } from "../../Types";

export const initialState = {
  simplifiedWords: [""],
  traditionalWords: [""],
  dictionary: [""],
  svgAssets: {}
};

export const DictionaryReducer = (state: object, action: Action) => {
  switch (action.type) {
    case "SET_TRADITIONAL_WORDS":
      return { ...state, traditionalWords: action.payload };
    case "SET_SIMPLIFIED_WORDS":
      return { ...state, simplifiedWords: action.payload };
    case "SET_DICTIONARY":
      return { ...state, dictionary: action.payload };
    case "SET_SVG_ASSETS":
      return { ...state, svgAssets: action.payload };
    default:
      return state;
  }
};
