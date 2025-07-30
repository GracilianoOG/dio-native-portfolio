import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SkillCardProps {
  name: string;
  rating: number[];
}

export default function SkillCard({ name, rating }: SkillCardProps) {
  const generateStarts = () => {
    const AMOUNT = 5;
    const SIZE = 20;
    const stars = [];

    for (let i = 0; i < AMOUNT; i++) {
      switch (rating[i]) {
        case 1:
          stars.push(
            <Ionicons name="star-sharp" size={SIZE} color={Colors.ORANGE} />
          );
          break;
        case 0:
          stars.push(
            <Ionicons
              name="star-half-sharp"
              size={SIZE}
              color={Colors.ORANGE}
            />
          );
          break;
        default:
          stars.push(
            <Ionicons name="star-outline" size={SIZE} color={Colors.WHITE} />
          );
      }
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.stars}>{generateStarts()}</View>
    </View>
  );
}
