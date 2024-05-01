import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PieScreen from "../screens/PieScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TransactionsScreen from "./TransactionsScreen";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabWrapper = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarStyle: { backgroundColor: "black", borderTopWidth: 0 },
          tabBarShowLabel: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={PieScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabWrapper;
