import React, { createRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import SvgAssets from "../resources/SvgAssets";
import { loadLocalRawResource } from "../common/AssetsHelper";
import WebView from "react-native-webview";
import styles from "./styles/ChineseCharacterStyle";

interface Props {
  character: string;
}

class ChineseCharacter extends React.Component<Props> {
  webView = createRef();
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      xmlData: "",
      reset: 0,
    };
  }

  render() {
    // @ts-ignore
    const { xmlData, reset } = this.state;
    if (xmlData.length === 0) {
      return <View />;
    }
    return (
      <View style={styles.container}>
        <WebView
          source={{ html: xmlData }}
          bounces={false}
          style={{ backgroundColor: "transparent", width: 300, height: 300 }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({
              reset: reset + 1,
            });
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount(): void {
    const { character } = this.props;
    const characterUnicode = character.charCodeAt(0);
    // @ts-ignore
    const file = SvgAssets[characterUnicode.toString()];
    loadLocalRawResource(file)
      .then(result => {
        this.setState({
          xmlData: result,
        });
      })
      .catch(err => console.log(err));
  }
}

export default ChineseCharacter;
