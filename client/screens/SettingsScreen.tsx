import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.styleContainer}>
        <Header />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  titleContainer: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    marginTop: 20,
  },
  styleContainer: {
    flex: 10,
  },
});

export default SettingsScreen;
