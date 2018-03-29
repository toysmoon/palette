import React from "react";
import {
  View
} from "react-native";

//component Import
import { PaletteItem } from "../components/home/PaletteItem";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <PaletteItem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
