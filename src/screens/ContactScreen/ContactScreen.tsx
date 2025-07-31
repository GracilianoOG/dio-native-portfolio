import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactLink from "../../components/ContactLink";

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
      <View style={{ gap: 16 }}>
        <ContactLink label="GitHub" url="https://github.com/GracilianoOG" />
        <ContactLink
          label="LinkedIn"
          url="https://www.linkedin.com/in/gabrielgmbarros"
        />
        <ContactLink
          label="freeCodeCamp"
          url="https://www.freecodecamp.org/GracilianoOG"
        />
      </View>
    </SafeAreaView>
  );
}
