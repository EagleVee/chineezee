import React, { useEffect, ReactElement } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import styles from "./styles/ChineseCharacterStyle";
import i18n from "i18n-js";
import { WIDTH_RATIO } from "../config/Dimens";

interface Props {
  character: string;
}

function ChineseCharacter(props: Props): ReactElement {
  // @ts-ignore
  const html = getHtmlFromCharacter(props.character);
  return (
    <View style={styles.container}>
      <WebView
        source={{ html: html }}
        bounces={false}
        javaScriptEnabled
        style={{
          backgroundColor: "transparent",
          width: 375 * WIDTH_RATIO,
          height: 500,
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

const css = `
  .stroke-reset {
    background-color: #5cb85c;
    color: white;
    padding: 6px 12px;
  }
  
  button {
    background-color: transparent;
    border: 0 transparent;
    border-radius: 5px;
    font-size: 18px;
  }
  
  .target-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stroke-reset-container {
    padding-left: 20px;
  }
`;

export default ChineseCharacter;
