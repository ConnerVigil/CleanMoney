import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import TransactionCard from "../components/TransactionCard";

const TransactionsScreen = () => {
  const [search, setSearch] = useState("");

  const transactions = [
    {
      id: "1",
      title: "Groceries",
      amount: -20.0,
      date: "2022-01-01",
    },
    {
      id: "2",
      title: "Salary",
      amount: 2000.0,
      date: "2022-01-01",
    },
    {
      id: "3",
      title: "Rent",
      amount: -500.0,
      date: "2022-01-01",
    },
    {
      id: "4",
      title: "Electricity",
      amount: -50.0,
      date: "2022-01-01",
    },
    {
      id: "5",
      title: "Internet",
      amount: -20.0,
      date: "2022-01-01",
    },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search transactions..."
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchBar: {
    marginTop: 60,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "white",
    margin: 10,
  },
});

export default TransactionsScreen;
