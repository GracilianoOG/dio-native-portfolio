import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.ORANGE,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    minWidth: 250,
    padding: 12,
  },
  label: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
