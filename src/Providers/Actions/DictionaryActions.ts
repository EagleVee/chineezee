import { Dispatch } from "react";
import { Action } from "../../Types";
import RNFetchBlob from "rn-fetch-blob";
import { unzip } from "react-native-zip-archive";
import { STATUS_OK, SVG_ENDPOINT } from "../../Config/Remote";
import { DocumentDirectoryPath, readDir, readFile } from "react-native-fs";
import { LocalStorage } from "../../Common/LocalStorage";

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

  const setSvgAssets = async (svgAssets = {}) => {
    dispatch({
      type: "SET_SVG_ASSETS",
      payload: svgAssets
    });
  };

  const fetchSvgs = async (onSuccess = () => {}, onFailed = () => {}) => {
    const response = await RNFetchBlob.config({
      fileCache: true,
      path: DocumentDirectoryPath + "/svg.zip"
    }).fetch("GET", SVG_ENDPOINT);
    const status = response.info().status;
    if (status === STATUS_OK) {
      const responsePath = response.path();
      console.log("PATH", responsePath);
      const unzippedPath = await unzip(
        responsePath,
        DocumentDirectoryPath,
        "UTF-8"
      );
      console.log("UNZIPPED PATH", unzippedPath);
      const fileStream = await RNFetchBlob.fs.readStream(
        unzippedPath + "/svg.json",
        "utf8"
      );
      fileStream.open();
      let fileContent = "";
      fileStream.onData(chunk => {
        fileContent = fileContent + chunk;
      });
      fileStream.onEnd(async () => {
        // console.log("FILE CONTENT", fileContent);
        const parsedAssets = JSON.parse(fileContent);
        console.log("ASSETS", fileContent);
        await LocalStorage.set("svgAssets", fileContent);
        console.log(LocalStorage.get("svgAssets", "DEFAULT"));
        await setSvgAssets(parsedAssets);
        await onSuccess();
      });
    }
  };

  return {
    setSimplifiedWords,
    setTraditionalWords,
    setDictionary,
    setSvgAssets,
    fetchSvgs
  };
};

export default DictionaryActions;
