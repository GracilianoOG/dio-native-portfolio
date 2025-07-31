import React from "react";
import { Linking, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../utils/colors";

interface ContactLinkProps {
  label: string;
  url: string;
}

export default function ContactLink({ label, url }: ContactLinkProps) {
  const handlePress = async () => {
    await Linking.openURL(url);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="arrow-redo-sharp" size={18} color={Colors.WHITE} />
    </Pressable>
  );
}
