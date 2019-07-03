import React from "react";
import { Text, View, StyleSheet } from "react-native";

const LanguageList = ({ langs }) => {
  const { textBox } = styles;
  return (
    <View>
      <Text style={textBox}>{langs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    padding: 10,
    textTransform: "capitalize",
    borderBottomWidth: 3,
    borderColor: "#778899",
    fontSize: 20,
    marginVertical: 8,
    color: "#778899",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default LanguageList;
