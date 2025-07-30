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
    fontFamily: "monospace",
    fontSize: 28,
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
  },
});
