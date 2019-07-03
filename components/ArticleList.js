import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const ArticleList = ({ lang }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>{lang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 25,
    minHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
    padding: 10
  }
});
export default ArticleList;
