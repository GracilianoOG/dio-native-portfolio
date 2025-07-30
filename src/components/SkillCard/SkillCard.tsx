import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SkillCard() {
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: Colors.ORANGE,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        marginBottom: 30,
      }}
    >
      <View>
        <Text style={{ color: Colors.WHITE, fontSize: 20 }}>TypeScript</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-sharp" size={20} color={Colors.ORANGE} />
        <Ionicons name="star-outline" size={20} color={Colors.WHITE} />
        <Ionicons name="star-outline" size={20} color={Colors.WHITE} />
      </View>
    </View>
  );
}
