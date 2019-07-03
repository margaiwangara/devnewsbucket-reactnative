import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry, FlatList } from "react-native";

import ArticleList from "./ArticleList";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: "laravel" },
            { key: "nodejs" },
            { key: "reactjs" },
            { key: "php" },
            { key: "html" }
          ]}
          renderItem={({ item }) => <ArticleList lang={item.key} />}
        />
      </View>
    );
  }
}

export default Article;
