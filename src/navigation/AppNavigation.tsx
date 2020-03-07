import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import HomeScreen from "../containers/HomeScreen";

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
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Trang chủ" }}
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
