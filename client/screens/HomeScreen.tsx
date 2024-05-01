import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { signOut, supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { styles } from "../styles/styles";

const HomeScreen = () => {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  // const handleSignOut = async () => {
  //   await signOut();
  // };

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

export default HomeScreen;
