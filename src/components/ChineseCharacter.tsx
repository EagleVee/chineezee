import React, { useEffect, ReactElement, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import WebView from "react-native-webview";
import styles from "./styles/ChineseCharacterStyle";
import i18n from "i18n-js";
import { WIDTH_RATIO } from "../config/Dimens";
import { loadLocalRawResource } from "../common/AssetsHelper";

interface Props {
  character: string;
}

export default class ChineseCharacter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      svgXml: "",
    };
  }
  render() {
    const { character } = this.props;
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
}

function ChineseCharacter1(props: Props): ReactElement {
  const { character } = props;
  const [reset, setReset] = useState(false);
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
      <TouchableOpacity
        onPress={() => {
          setReset(!reset);
          console.log(reset);
        }}>
        <Text>Reanimate</Text>
      </TouchableOpacity>
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
            <div id="target1">
            <svg version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <g stroke="lightgray" stroke-dasharray="1,1" stroke-width="1" transform="scale(4, 4)">
              <line x1="0" y1="0" x2="256" y2="256"></line>
              <line x1="256" y1="0" x2="0" y2="256"></line>
              <line x1="128" y1="0" x2="128" y2="256"></line>
              <line x1="0" y1="128" x2="256" y2="128"></line>
            </g>
            <g transform="scale(1, -1) translate(0, -900)">
              <style type="text/css">
                
                  @keyframes keyframes0 {
                    from {
                      stroke: blue;
                      stroke-dashoffset: 577;
                      stroke-width: 128;
                    }
                    65% {
                      animation-timing-function: step-end;
                      stroke: blue;
                      stroke-dashoffset: 0;
                      stroke-width: 128;
                    }
                    to {
                      stroke: black;
                      stroke-width: 1024;
                    }
                  }
                  #make-me-a-hanzi-animation-0 {
                    animation: keyframes0 0.7195638020833334s both;
                    animation-delay: 0s;
                    animation-timing-function: linear;
                  }
                
                  @keyframes keyframes1 {
                    from {
                      stroke: blue;
                      stroke-dashoffset: 587;
                      stroke-width: 128;
                    }
                    66% {
                      animation-timing-function: step-end;
                      stroke: blue;
                      stroke-dashoffset: 0;
                      stroke-width: 128;
                    }
                    to {
                      stroke: black;
                      stroke-width: 1024;
                    }
                  }
                  #make-me-a-hanzi-animation-1 {
                    animation: keyframes1 0.7277018229166666s both;
                    animation-delay: 0.7195638020833334s;
                    animation-timing-function: linear;
                  }
                
              </style>
              
                <path d="M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z" fill="lightgray"></path>
              
                <path d="M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z" fill="lightgray"></path>
              
              
                <clipPath id="make-me-a-hanzi-clip-0">
                  <path d="M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z"></path>
                </clipPath>
                <path clip-path="url(#make-me-a-hanzi-clip-0)" d="M 336 704 L 450 666 L 554 620 L 587 595 L 614 558" fill="none" id="make-me-a-hanzi-animation-0" stroke-dasharray="449 898" stroke-linecap="round"></path>
              
                <clipPath id="make-me-a-hanzi-clip-1">
                  <path d="M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"></path>
                </clipPath>
                <path clip-path="url(#make-me-a-hanzi-clip-1)" d="M 317 548 L 347 531 L 455 496 L 543 456 L 578 430 L 602 395" fill="none" id="make-me-a-hanzi-animation-1" stroke-dasharray="459 918" stroke-linecap="round"></path>
              
            </g>
          </svg>
          </div>
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

  #target1 {
    width: 250px;
    height: 250px;
  }
`;
