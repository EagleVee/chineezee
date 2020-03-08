import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import StrokeOrderScreen from "../containers/StrokeOrderScreen";
import DictionaryScreen from "../containers/DictionaryScreen";
import i18n from "i18n-js";
import PronunciationScreen from "../containers/PronunciationScreen";

export type RootStackParamList = {
  AppTab: ReactElement;
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParamList>();

function AppTab(): React.ReactElement {
  return (
    <Tab.Navigator initialRouteName="StrokeOrderScreen">
      <Tab.Screen
        name="StrokeOrderScreen"
        component={StrokeOrderScreen}
        options={{ title: i18n.t("tab-stroke") }}
      />
      <Tab.Screen
        name="DictionaryScreen"
        component={DictionaryScreen}
        options={{ title: i18n.t("tab-dictionary") }}
      />
      <Tab.Screen
        name="PronunciationScreen"
        component={PronunciationScreen}
        options={{ title: i18n.t("tab-pronunciation") }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AppTab">
        <Stack.Screen name="AppTab" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
