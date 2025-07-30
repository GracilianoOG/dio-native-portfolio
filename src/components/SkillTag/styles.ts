import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  tag: {
    backgroundColor: Colors.ORANGE,
    padding: 8,
  },
  tagText: {
    color: Colors.WHITE,
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
