import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}
