import { View, StyleSheet } from "react-native";
import React from "react";
import PieChartComponent from "../components/PieChart";

const PieScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <View style={styles.pieChartContainer}>
          <PieChartComponent />
        </View>
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
  centerContent: {
    justifyContent: "center",
    flex: 10,
  },
  pieChartContainer: {
    flex: 1,
  },
});

export default PieScreen;
