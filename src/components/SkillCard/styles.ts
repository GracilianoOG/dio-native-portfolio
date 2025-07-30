import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: Colors.ORANGE,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginBottom: 30,
  },
  name: { color: Colors.WHITE, fontSize: 20 },
  stars: { flexDirection: "row" },
});
