import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import SkillCard from "../../components/SkillCard";

export default function SkillsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <ScrollView>
        <SkillCard name="HTML" rating={[1, 1, 1, 1, 1]} />
        <SkillCard name="CSS" rating={[1, 1, 1, 1]} />
        <SkillCard name="SASS" rating={[1, 1, 1, 0]} />
        <SkillCard name="JavaScript" rating={[1, 1, 1, 1, 0]} />
        <SkillCard name="TypeScript" rating={[1, 1, 1, 0]} />
        <SkillCard name="React" rating={[1, 1, 1, 0]} />
        <SkillCard name="React Native" rating={[1, 1, 1]} />
        <SkillCard name="Styled Components" rating={[1, 1, 1, 0]} />
        <SkillCard name="Accessibility" rating={[1, 1, 1, 0]} />
      </ScrollView>
    </SafeAreaView>
  );
}
