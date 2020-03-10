import React, { createRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    const html = this.getHtmlFromCharacter(this.props.character);
    return (
      <View style={styles.container}>
        <WebView
          source={{ html: html }}
          bounces={false}
          javaScriptEnabled
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

  getHtmlFromCharacter(character: string) {
    return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/hanzi-writer@2.2/dist/hanzi-writer.min.js"></script>
      </head>
      <body>
        <div id="target">Character</div>
        <script>
          document.getElementById("target").innerHTML = "";
          const writer = HanziWriter.create("target", "${character}", {
            width: 300,
            height: 300,
            delayBetweenStrokes: 800,
            delayBetweenLoops: 500
          });
          writer.loopCharacterAnimation();
        </script>
      </body>
    </html>
  `;
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
