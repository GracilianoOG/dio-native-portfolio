import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";

import { styles } from "./styles";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}
