import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://avatars.githubusercontent.com/u/72778164?s=250&v=4",
        }}
      />
      <Text style={styles.title}>Graciliano</Text>
      <Text style={styles.description}>
        Developer, Gamer, Cooking Enthusiast
      </Text>
    </SafeAreaView>
  );
}
