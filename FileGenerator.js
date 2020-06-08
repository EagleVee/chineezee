const fs = require("fs");

const componentContent = fileName => {
  return `import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/${fileName}Style";
import PropTypes from "prop-types";

export default function ${fileName}(props) {
  return (
    <View style={styles.container}>
      <Text>${fileName}</Text>
    </View>
  );
}

${fileName}.propTypes = {
  onPress: PropTypes.func.isRequired
};

${fileName}.defaultProps = {
  onPress: () => {}
};`;
};

const componentStyleContent = fileName => {
  return `import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes";
  
export default StyleSheet.create({
  ...ApplicationStyles.component,
  container: {
    flex: 1,
  },
});`;
};

const containerContent = fileName => {
  return `import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/${fileName}Style";
import Container from "../Components/Container";
import RNScrollView from "../Components/RNScrollView";

export default function ${fileName}(props) {
  return (
    <Container style={styles.container} notSafeArea isPadding={false}>
      <RNScrollView>
        <Text>${fileName}</Text>
      </RNScrollView>
    </Container>
  );
}`;
};

const containerStyleContent = fileName => {
  return `import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes";  
export default StyleSheet.create({
  ...ApplicationStyles.screen,
});`;
};

const providerContent = fileName => {
  return `import initialState, { ${fileName}Reducer } from "../ReduxHooks/${fileName}Reducer";
import React, { createContext, useReducer } from "react";
import { ${fileName}Actions } from "../ReduxHooks/${fileName}Actions";
import API from "../API";
import { put } from "./Dispatch";

export const ${fileName}Context = createContext({});
export const ${fileName}Provider = ${fileName}Context.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(${fileName}Reducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <${fileName}Provider value={{ state, dispatch, ...actions }}>
      {props.children}
    </${fileName}Provider>
  );
}
export const mapActionsToDispatch = dispatch => {
  return {
    doSomething: doSomething(dispatch)
  };
};

const doSomething = dispatch => async () => {
  await put(dispatch, ${fileName}Actions.doSomething, "Some other things");
};
`;
};

const reducerContent = fileName => {
  return `import { ${fileName}Actions } from "./${fileName}Actions";

export const initialState = {
  something: "Somethings"
};

export const ${fileName}Reducer = (state, action) => {
  switch (action.type) {
    case ${fileName}Actions.doSomething:
      return { ...state, something: payload }
    default:
      return state;
  }
};

export default initialState;
`;
};

const actionContent = fileName => {
  return `export const ${fileName}Actions = {
  doSomething: "DO_SOMETHING"
};`;
};

const createComponent = fileName => {
  const content = componentContent(fileName);
  const styleContent = componentStyleContent(fileName);
  const filePath = `App/Components/${fileName}.js`;
  const styleFilePath = `App/Components/Styles/${fileName}Style.js`;
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content, () => {});
    writeToOutput(styleFilePath, styleContent, () => {});
  }
};

const createContainer = fileName => {
  const content = containerContent(fileName);
  const styleContent = containerStyleContent(fileName);
  const filePath = `App/Containers/${fileName}.js`;
  const styleFilePath = `App/Containers/Styles/${fileName}Style.js`;
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content, () => {});
    writeToOutput(styleFilePath, styleContent, () => {});
  }
};

const createProvider = fileName => {
  const provider = providerContent(fileName);
  const action = actionContent(fileName);
  const reducer = reducerContent(fileName);
  const providerPath = `App/Providers/${fileName}Provider.js`;
  const actionPath = `App/ReduxHooks/${fileName}Actions.js`;
  const reducerPath = `App/ReduxHooks/${fileName}Reducer.js`;
  if (
    fs.existsSync(providerPath) ||
    fs.existsSync(actionPath) ||
    fs.existsSync(reducerPath)
  ) {
    throw new Error("File existed!");
  } else {
    writeToOutput(providerPath, provider, () => {});
    writeToOutput(actionPath, action, () => {});
    writeToOutput(reducerPath, reducer, () => {});
  }
};

function writeToOutput(fileOutput, content) {
  const outputWriteStream = fs.createWriteStream(fileOutput);
  outputWriteStream.write(content);
}

const createFile = () => {
  const args = process.argv.slice(2);
  const type = args[0];
  const name = args[1];
  if (type && name) {
    switch (type) {
      case "component":
        createComponent(name);
        break;
      case "container":
        createContainer(name);
        break;
      case "provider":
        createProvider(name);
    }
  }
};

createFile();
