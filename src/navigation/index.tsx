import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import HomeScreen from "../containers/HomeScreen";

export type RootStackParamList = {
  HomeScreen: HomeScreen;
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
