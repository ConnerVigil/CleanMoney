import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { signOut, supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

const Header = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, {session?.user?.email}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Sign Out" onPress={handleSignOut} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "red",
  },
});

export default Header;
