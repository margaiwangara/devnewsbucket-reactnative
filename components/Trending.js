import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import * as Font from "expo-font";

import TrendingCard from "./TrendingCard";

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "ubuntu-medium": require("../assets/fonts/Ubuntu-Medium.ttf")
    });

    this.setState({ isFontLoaded: true });
  }
  render() {
    const { isFontLoaded } = this.state;
    const { titleStyling, container } = styles;
    return (
      <View style={container}>
        {isFontLoaded ? (
          <Text style={titleStyling}>Trending Topics</Text>
        ) : null}
        <ScrollView horizontal={true}>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    alignItems: "flex-start",
    paddingLeft: 12
  },
  titleStyling: {
    fontFamily: "ubuntu-medium",
    fontSize: 20,
    paddingVertical: 15,
    color: "#778899"
  }
});
export default Trending;
