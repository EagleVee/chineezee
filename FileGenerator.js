const fs = require("fs");

const componentContent = fileName => {
  return `import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/${fileName}Style";
import PropTypes from "prop-types";

interface Props {
  onPress: () => {};
}

export default function ${fileName}(props: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Text>${fileName}</Text>
    </View>
  );
}`;
};

const componentStyleContent = fileName => {
  return `import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors } from "../../Themes";
  
export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flex: 1,
  },
});`;
};

const containerContent = fileName => {
  return `import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/${fileName}Style";
import Container from "../Components/Container";
import RNScrollView from "../Components/RNScrollView";

interface Props {
  navigation: any;
}

export default function ${fileName}(props: Props): ReactElement {
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
  ...ApplicationStyles,
});`;
};

const providerContent = fileName => {
  return `import initialState, { ${fileName}Reducer, ${fileName}Actions } from "../ReduxHooks/${fileName}Redux";
import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import API from "../API";
import { put } from "./index";
import { Action } from "../Types";

export const ${fileName}Context = createContext({});
export const ${fileName}Provider = ${fileName}Context.Provider;

interface Props {
  children?: ReactNode;
}

export default function Wrapper(props: Props) {
  const [state, dispatch] = useReducer(${fileName}Reducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <${fileName}Provider value={{ state, dispatch, ...actions }}>
      {props.children}
    </${fileName}Provider>
  );
}
export const mapActionsToDispatch = (dispatch: Dispatch<Action>) => {
  return {
    doSomething: doSomething(dispatch)
  };
};

const doSomething = (dispatch: Dispatch<Action>) => async () => {
  await put(dispatch, ${fileName}Actions.doSomething, "Some other things");
};
`;
};

const reducerContent = fileName => {
  return `import { Action } from "../Types";

export const initialState = {
  something: "Somethings"
};

export const ${fileName}Actions = {
  doSomething: "DO_SOMETHING"
};

export const ${fileName}Reducer = (state: object, action: Action) => {
  switch (action.type) {
    case ${fileName}Actions.doSomething:
      return { ...state, something: action.payload };
    default:
      return state;
  }
};

export default initialState;
`;
};

const createComponent = fileName => {
  const content = componentContent(fileName);
  const styleContent = componentStyleContent(fileName);
  const filePath = `src/Components/${fileName}.js`;
  const styleFilePath = `src/Components/Styles/${fileName}Style.js`;
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
  const filePath = `src/Containers/${fileName}.tsx`;
  const styleFilePath = `src/Containers/Styles/${fileName}Style.ts`;
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content, () => {});
    writeToOutput(styleFilePath, styleContent, () => {});
  }
};

const createProvider = fileName => {
  const provider = providerContent(fileName);
  const reducer = reducerContent(fileName);
  const providerPath = `src/Providers/${fileName}Provider.tsx`;
  const reducerPath = `src/ReduxHooks/${fileName}Redux.ts`;
  if (fs.existsSync(providerPath) || fs.existsSync(reducerPath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(providerPath, provider, () => {});
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
