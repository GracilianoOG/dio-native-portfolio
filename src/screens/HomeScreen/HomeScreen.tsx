import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import SkillTag from "../../components/SkillTag";

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
      <Text style={styles.description}>
        The right dev in the right place can create all the apps in the world...
      </Text>
      <View style={styles.tags}>
        <SkillTag label="HTML" />
        <SkillTag label="CSS" />
        <SkillTag label="SASS" />
        <SkillTag label="JavaScript" />
        <SkillTag label="TypeScript" />
        <SkillTag label="React" />
        <SkillTag label="React Native" />
        <SkillTag label="Styled Components" />
      </View>
    </SafeAreaView>
  );
}
