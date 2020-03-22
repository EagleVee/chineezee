import React, {ReactElement, useState} from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import styles from "./styles/ChineseCharacterStyle";
import i18n from "i18n-js";
import { loadLocalRawResource } from "../common/AssetsHelper";
import SvgAssets from "../resources/SvgAssets";

interface Props {
  character: string;
}

export default function ChineseCharacter(props: Props): ReactElement {
  const { character } = props;
  const html = getHtmlFromCharacter(character);
  console.log(html);
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

function getHtmlFromCharacter(character: string): string {
  const [xml, setXml] = useState(defaultSvg);
  if (character) {
    const charCode = character.charCodeAt(0);
    // @ts-ignore
    loadLocalRawResource(SvgAssets[charCode])
      .then(result => {
        setXml(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            <div id="target">
                ${xml}
            </div>
        </div>
        <div class="stroke-reset-container">
          <button
           onclick="reset();"
           class="stroke-reset"
           >${i18n.t("stroke-reset")}</button>
        </div>
        <script>
          const clipPaths = document.getElementsByTagName("clipPath");
          const parentNode = clipPaths[0].parentNode;
          const paths = document.getElementsByTagName("path");
          let animationDuration = 0;
          for (let path of paths) {
            if (path.id.length > 0) {
              const pathAnimationDuration = window.getComputedStyle(path)
                .animationDuration;
              const duration = Number(
                pathAnimationDuration.substring(
                  0,
                  pathAnimationDuration.length - 1,
                ),
              );
              animationDuration = animationDuration + duration;
            }
          }
          function loopAnimation() {
            setInterval(function() {
              removeAndAppend();
            }, (animationDuration + 0.4) * 1000);
          }
    
          function removeAndAppend() {
            const content = parentNode.innerHTML;
            parentNode.innerHTML = "";
            parentNode.innerHTML = content;
          }
    
          function reset() {
            removeAndAppend();
            loopAnimation();
          }
    
          loopAnimation();
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

  #target {
    width: 250px;
    height: 250px;
  }
`;

const defaultSvg = `
<svg version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <g stroke="lightgray" stroke-dasharray="1,1" stroke-width="1" transform="scale(4, 4)">
    <line x1="0" y1="0" x2="256" y2="256"></line>
    <line x1="256" y1="0" x2="0" y2="256"></line>
    <line x1="128" y1="0" x2="128" y2="256"></line>
    <line x1="0" y1="128" x2="256" y2="128"></line>
  </g>
</svg>
`;
