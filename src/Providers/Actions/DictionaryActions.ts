import API from "../../API";
import { Dispatch } from "react";
import { Action } from "../../Types";

const DictionaryActions = (state = {}, dispatch: Dispatch<Action>) => {
  const setSimplifiedWords = async (words: string[]) => {
    dispatch({
      type: "SET_SIMPLIFIED_WORDS",
      payload: words
    });
  };

  const setTraditionalWords = async (words: string[]) => {
    dispatch({
      type: "SET_TRADITIONAL_WORDS",
      payload: words
    });
  };

  const setDictionary = async (dictionary: object) => {
    dispatch({
      type: "SET_DICTIONARY",
      payload: dictionary
    });
  };

  return {
    setSimplifiedWords,
    setTraditionalWords,
    setDictionary
  };
};

export default DictionaryActions;
