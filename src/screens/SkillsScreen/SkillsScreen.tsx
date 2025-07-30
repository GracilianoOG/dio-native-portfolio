import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SkillsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Skills</Text>
    </SafeAreaView>
  );
}
