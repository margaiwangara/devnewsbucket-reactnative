import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Font from "expo-font";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "ubuntu-regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
      "ubuntu-light": require("../assets/fonts/Ubuntu-Light.ttf")
    });
    this.setState({ isFontLoaded: true });
  }
  render() {
    const { isFontLoaded } = this.state;
    const { container, welcomeText, textFamily } = styles;
    return (
      <View style={container}>
        {isFontLoaded ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={{ lineHeight: 15 }}>
              <Text style={[welcomeText, textFamily]}>hello, margai</Text>
              <Text style={[textFamily, { fontSize: 15 }]}>
                Here's your news feed
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "ubuntu-light",
                  paddingRight: 10,
                  color: "#778899"
                }}
              >
                25
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    paddingVertical: 20,
    paddingHorizontal: 2,
    width: Dimensions.get("window").width - 25
  },
  welcomeText: {
    fontSize: 35,
    textTransform: "capitalize"
  },
  textFamily: {
    fontFamily: "ubuntu-regular",
    color: "#778899"
  }
});
export default Welcome;
