import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://avatars.githubusercontent.com/u/72778164?s=500&v=4",
        }}
      />
      <Text style={styles.title}>Graciliano</Text>
    </SafeAreaView>
  );
}
