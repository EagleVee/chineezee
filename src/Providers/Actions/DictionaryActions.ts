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
      appendExt: "zip"
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
      const unzippedFiles = await readDir(unzippedPath + "/svgs");
      let svgAssets = Object.create({});
      for await (const file of unzippedFiles) {
        const { name, path } = file;
        const fileContent = await readFile(path, "utf8");
        const nameWithoutExtension = name.split(".")[0];
        Object.assign(svgAssets, {
          [`${nameWithoutExtension}`]: fileContent
        });
      }
      await LocalStorage.set("svgAssets", JSON.stringify(svgAssets));
      console.log(LocalStorage.get("svgAssets", "DEFAULT"));
      await setSvgAssets(svgAssets);
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
