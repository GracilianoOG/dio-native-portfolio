import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: Colors.ORANGE,
    paddingHorizontal: 16,
  },
  text: {
    color: Colors.WHITE,
    textAlign: "center",
  },
  icon: { marginBottom: 16 },
  institution: { fontWeight: "700" },
  date: { fontStyle: "italic", opacity: 0.8 },
});
