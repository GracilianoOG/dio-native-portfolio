import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactLink from "../../components/ContactLink";
import RoundPhoto from "../../components/RoundPhoto";

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <RoundPhoto size={150} />
      <Text style={styles.title}>Graciliano</Text>
      <Text style={styles.description}>
        Developer, Gamer, Cooking Enthusiast
      </Text>
      <View style={styles.links}>
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
