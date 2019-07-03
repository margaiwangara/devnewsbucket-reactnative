import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Welcome from "./components/Welcome";
import Trending from "./components/Trending";
import Language from "./components/Language";
import Article from "./components/Article";

class App extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Welcome />
        <Trending />
        <Language />
        <Article />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245, 252, 255)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
