import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SkillCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>TypeScript</Text>
      </View>
      <View style={styles.stars}>
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-outline" size={20} color={Colors.WHITE} />
        <Ionicons name="star-outline" size={20} color={Colors.WHITE} />
      </View>
    </View>
  );
}
