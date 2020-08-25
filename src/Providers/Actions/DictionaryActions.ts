import API from "../../API";
import { Dispatch } from "react";
import { Action } from "../../Types";
import RNFetchBlob from "rn-fetch-blob";
import {STATUS_OK, SVG_ENDPOINT} from "../../Config/Remote";

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

  const fetchSvgs = async (onSuccess = () => {}, onFailed = () => {}) => {
    const response = await RNFetchBlob.fetch("GET", SVG_ENDPOINT);
    const status = response.info().status;
    if (status === STATUS_OK) {
      console.log(response);
    }
  };

  return {
    setSimplifiedWords,
    setTraditionalWords,
    setDictionary,
    fetchSvgs
  };
};

export default DictionaryActions;
