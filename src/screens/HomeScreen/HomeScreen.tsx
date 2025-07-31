import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import SkillTag from "../../components/SkillTag";
import RoundPhoto from "../../components/RoundPhoto";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <RoundPhoto size={250} />
      <Text style={styles.title}>Graciliano</Text>
      <Text style={styles.description}>
        "The right dev in the right place can create all the apps in the
        world..."
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
