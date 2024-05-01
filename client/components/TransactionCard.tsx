import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

const TransactionCard = ({ transaction }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardTitle}>{transaction.title}</Text>
        <Text style={styles.cardDate}>{transaction.date}</Text>
      </View>
      <Text style={styles.cardAmount}>{transaction.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "gray",
    borderWidth: 1,
    padding: 20,
  },
  cardLeft: {
    flexDirection: "column",
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardAmount: {
    fontSize: 18,
    color: colors.green,
    fontWeight: "bold",
  },
  cardDate: {
    fontSize: 12,
    color: "gray",
  },
});

export default TransactionCard;
