import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.VERY_DARK_GRAY,
    flex: 1,
    justifyContent: "center",
  },
  photo: {
    borderColor: Colors.ORANGE,
    borderWidth: 3,
    borderRadius: 125,
    height: 250,
    marginBottom: 30,
    width: 250,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "monospace",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%",
  },
});
