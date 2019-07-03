import React, { Component } from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text
} from "react-native";

import LanguageList from "./LanguageList";

class Language extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <FlatList
          data={[
            { key: "laravel" },
            { key: "nodejs" },
            { key: "reactjs" },
            { key: "php" },
            { key: "html" },
            { key: "javascript" },
            { key: "java" },
            { key: "c++" }
          ]}
          renderItem={({ item }) => <LanguageList langs={item.key} />}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    alignItems: "flex-start",
    paddingLeft: 12
  }
});
export default Language;
