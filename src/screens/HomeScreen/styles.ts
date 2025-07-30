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
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%",
  },
  description: {
    color: Colors.WHITE,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "300",
    lineHeight: 24,
    marginBottom: 40,
    textAlign: "center",
    width: "75%",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    width: "100%",
  },
  tag: {
    backgroundColor: Colors.ORANGE,
    padding: 8,
  },
  tagText: {
    color: Colors.WHITE,
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
    // width: "100%",
  },
});
