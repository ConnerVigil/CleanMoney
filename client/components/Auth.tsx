import React, { useState } from "react";
import { Alert, View, Text } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "react-native-elements";
import { StatusBar, StyleSheet } from "react-native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={[styles.container, styles.centerContent]}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>CleanMoney💰</Text>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email"
          autoCapitalize={"none"}
          inputStyle={{ color: "white" }}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          autoCapitalize={"none"}
          inputStyle={{ color: "white" }}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
          buttonStyle={{ backgroundColor: "white" }}
          titleStyle={{ color: "black" }}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
          buttonStyle={{ backgroundColor: "white" }}
          titleStyle={{ color: "black" }}
        />
      </View>
    </View>
  );
}

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
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
    color: "white",
  },
  mt20: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
