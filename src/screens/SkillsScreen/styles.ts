import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.VERY_DARK_GRAY,
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 28,
    fontFamily: "monospace",
    letterSpacing: 3,
    marginBottom: 30,
    textTransform: "uppercase",
    width: "100%",
  },
});
