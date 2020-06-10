import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import {ScrollView} from "react-native";

interface Props {
  children?: ReactNode;
}

export default function RNScrollView(props: Props): ReactElement {
  return (
    <ScrollView
      {...props}
      bounces={false}
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="never">
      {props.children}
    </ScrollView>
  );
}
