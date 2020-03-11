import React, { useEffect, ReactElement } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import WebView from "react-native-webview";
import styles from "./styles/ChineseCharacterStyle";
import i18n from "i18n-js";
import { WIDTH_RATIO } from "../config/Dimens";
// @ts-ignore
import IconLeft from "../resources/images/icons/icon_arrow_left.png";
// @ts-ignore
import IconRight from "../resources/images/icons/icon_arrow_right.png";

interface Props {
  character: string;
}

function ChineseCharacter(props: Props): ReactElement {
  const { character } = props;
  const html = getHtmlFromCharacter(character);
  return (
    <View style={styles.webViewContainer}>
      <WebView
        source={{ html: html }}
        bounces={false}
        javaScriptEnabled
        style={{
          backgroundColor: "transparent",
          width: 250,
          height: 300,
        }}
      />
    </View>
  );
}

function getHtmlFromCharacter(character: string) {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/hanzi-writer@2.2/dist/hanzi-writer.min.js"></script>
        <style>
            ${css}
        </style>
      </head>
      <body>
        <div class="target-container">
            <div id="target">Character</div>
        </div>
        <div class="stroke-reset-container">
          <button
           onclick="writer.loopCharacterAnimation();"
           class="stroke-reset"
           >${i18n.t("stroke-reset")}</button>
        </div>
        <script>
          document.getElementById("target").innerHTML = "";
          const writer = HanziWriter.create("target", "${character}", {
            width: 250,
            height: 250,
            delayBetweenStrokes: 800,
            delayBetweenLoops: 500
          });
          writer.loopCharacterAnimation();
        </script>
      </body>
    </html>
  `;
}

const css = `
  .stroke-reset {
    background-color: #f7f7f7;
    color: #292b2c;
    padding: 5px 10px;
  }
  
  button {
    background-color: transparent;
    border: 0 transparent;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .target-container {
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  
  .stroke-reset-container {
    padding-top: 10px;
  }
`;

export default ChineseCharacter;
