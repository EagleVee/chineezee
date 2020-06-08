import {
  StackNavigationProp,
  createStackNavigator
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
// @ts-ignore
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { ReactElement } from "react";
import StrokeOrderScreen from "../containers/StrokeOrderScreen";
import DictionaryScreen from "../containers/DictionaryScreen";
import AboutScreen from "../containers/AboutScreen";
import i18n from "i18n-js";
import PronunciationScreen from "../containers/PronunciationScreen";
import {Colors} from "../themes";

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
    <Tab.Navigator
      initialRouteName="StrokeOrderScreen"
      tabBarOptions={{
        style: {
          backgroundColor: Colors.twitterNightMode
        },
        labelStyle: {
          fontWeight: "500"
        },
        activeTintColor: Colors.twitterBlue,
        inactiveTintColor: Colors.twitterDarkGray
      }}>
      <Tab.Screen
        name="StrokeOrderScreen"
        component={StrokeOrderScreen}
        options={{
          title: i18n.t("tab-stroke"),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name={"pen-nib"} color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="DictionaryScreen"
        component={DictionaryScreen}
        options={{
          title: i18n.t("tab-dictionary"),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon
              name={"dictionary"}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="PronunciationScreen"
        component={PronunciationScreen}
        options={{
          title: i18n.t("tab-pronunciation"),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon name={"voice"} color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: i18n.t("tab-about"),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon name={"account"} color={color} size={size}/>
          )
        }}
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
