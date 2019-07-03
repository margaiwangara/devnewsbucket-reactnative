import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrendingCard = props => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>TrendingCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    padding: 10,
    marginRight: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 13
  }
});
export default TrendingCard;
