import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../utils/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface EducationCardProps {
  institution: string;
  location: string;
  date: string;
}

export default function EducationCard({
  institution,
  location,
  date,
}: EducationCardProps) {
  return (
    <View style={styles.container}>
      <FontAwesome
        style={styles.icon}
        name="graduation-cap"
        size={24}
        color={Colors.WHITE}
      />
      <View style={{ gap: 2 }}>
        <Text style={[styles.text, styles.institution]}>{institution}</Text>
        <Text style={styles.text}>{location}</Text>
        <Text style={[styles.text, styles.date]}>{date}</Text>
      </View>
    </View>
  );
}
