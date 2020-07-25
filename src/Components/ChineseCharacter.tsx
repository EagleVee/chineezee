import React, { ReactElement } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import styles from "./Styles/ChineseCharacterStyle";
import i18n from "i18n-js";
// import SvgAssets from "../Resources/SvgAssets";
import { WIDTH_RATIO } from "../Config/Dimens";
import { Colors } from "../Themes/index";

interface Props {
  character: string;
  svg: string;
}

export default function ChineseCharacter(props: Props): ReactElement {
  const { character, svg } = props;
  console.log(svg);
  const html = getHtmlFromData(svg);
  return (
    <View style={styles.webViewContainer}>
      <WebView
        source={{ html: html }}
        bounces={false}
        javaScriptEnabled
        style={{
          backgroundColor: "transparent",
          width: 250 * WIDTH_RATIO,
          height: 250 * WIDTH_RATIO
        }}
      />
    </View>
  );
}

function getHtmlFromData(svg: string): string {
  const characterData = svg ? svg : defaultSvg;
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            ${css}
        </style>
      </head>
      <body>
        <div class="target-container">
            <div id="target">
                ${characterData}
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
          
          let loopAnimation = setInterval(function() {
              removeAndAppend();
          }, (animationDuration + 0.3) * 1000);
    
          function removeAndAppend() {
            const content = parentNode.innerHTML;
            parentNode.innerHTML = "";
            parentNode.innerHTML = content;
          }
    
          function reset() {
            removeAndAppend();
            clearInterval(loopAnimation);
            loopAnimation = setInterval(function() {
            removeAndAppend();
            }, (animationDuration + 0.3) * 1000);
          }
        </script>
      </body>
    </html>
  `;
}

// function getHtmlFromCharacter(character: string): string {
//   let svg = defaultSvg;
//   if (character) {
//     const charCode = character.charCodeAt(0);
//     // @ts-ignore
//     if (SvgAssets[charCode]) {
//       // @ts-ignore
//       svg = SvgAssets[charCode];
//     } else {
//       svg = defaultSvg;
//     }
//   } else {
//     svg = defaultSvg;
//   }
//   return `
//     <html>
//       <head>
//         <meta charset="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <style>
//             ${css}
//         </style>
//       </head>
//       <body>
//         <div class="target-container">
//             <div id="target">
//                 ${svg}
//             </div>
//         </div>
//         <div class="stroke-reset-container">
//           <button
//            onclick="reset();"
//            class="stroke-reset"
//            >${i18n.t("stroke-reset")}</button>
//         </div>
//         <script>
//           const clipPaths = document.getElementsByTagName("clipPath");
//           const parentNode = clipPaths[0].parentNode;
//           const paths = document.getElementsByTagName("path");
//           let animationDuration = 0;
//           for (let path of paths) {
//             if (path.id.length > 0) {
//               const pathAnimationDuration = window.getComputedStyle(path)
//                 .animationDuration;
//               const duration = Number(
//                 pathAnimationDuration.substring(
//                   0,
//                   pathAnimationDuration.length - 1,
//                 ),
//               );
//               animationDuration = animationDuration + duration;
//             }
//           }
//
//           let loopAnimation = setInterval(function() {
//               removeAndAppend();
//           }, (animationDuration + 0.3) * 1000);
//
//           function removeAndAppend() {
//             const content = parentNode.innerHTML;
//             parentNode.innerHTML = "";
//             parentNode.innerHTML = content;
//           }
//
//           function reset() {
//             removeAndAppend();
//             clearInterval(loopAnimation);
//             loopAnimation = setInterval(function() {
//             removeAndAppend();
//             }, (animationDuration + 0.3) * 1000);
//           }
//         </script>
//       </body>
//     </html>
//   `;
// }

const width = 250 * WIDTH_RATIO;
const height = 235 * WIDTH_RATIO;

const css = `
  .stroke-reset {
    background-color: ${Colors.twitterBlue};
    color: white;
    padding: 6px 10px;
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
    overflow: hidden;
  }
  
  .stroke-reset-container {
    padding-top: 10px;
  }

  #target {
    width: ${width}px;
    height: ${height}px;
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
