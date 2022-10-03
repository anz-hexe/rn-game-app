import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent300,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent300,
    fontSize: 36,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
