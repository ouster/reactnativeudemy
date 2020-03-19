import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";

export default class App extends React.Component {
  increaseByOne = () => {
    console.log("pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.increaseByOne} style={styles.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <Text>OPEN up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 100,
    height: 50
  }
});
