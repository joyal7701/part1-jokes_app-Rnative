import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Components/Input";

export default class App extends React.Component {
  state = {
    value: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
