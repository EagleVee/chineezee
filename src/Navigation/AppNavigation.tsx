import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
// @ts-ignore
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { ReactElement } from "react";
import StrokeOrderScreen from "../Containers/StrokeOrderScreen";
import DictionaryScreen from "../Containers/DictionaryScreen";
import AboutScreen from "../Containers/AboutScreen";
import i18n from "i18n-js";
import PronunciationScreen from "../Containers/PronunciationScreen";
import { Colors } from "../Themes/index";
import SplashScreen from "../Containers/SplashScreen";
import WordDetailScreen from "../Containers/WordDetailScreen";
import SettingScreen from "../Containers/SettingScreen";

export type RootStackParamList = {
  AppTab: ReactElement;
  SplashScreen: ReactElement;
  WordDetailScreen: ReactElement;
  AboutScreen: ReactElement;
};

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParamList>();

function AppTab(): React.ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="StrokeOrderScreen"
      backBehavior="none"
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name={"pen-nib"} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="DictionaryScreen"
        component={DictionaryScreen}
        options={{
          title: i18n.t("tab-dictionary"),
          tabBarIcon: ({ color, size }) => (
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name={"voice"} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingScreen}
        options={{
          title: i18n.t("tab-settings"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name={"settings"}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AppTab" component={AppTab} />
        <Stack.Screen name="WordDetailScreen" component={WordDetailScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
