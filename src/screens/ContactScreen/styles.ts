import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.VERY_DARK_GRAY,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "monospace",
    letterSpacing: 3,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%",
  },
  description: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 30,
    textAlign: "center",
    width: "100%",
  },
  links: { gap: 16 },
});
