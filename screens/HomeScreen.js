import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from "../constants/constants";

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onExit(ScreenType.addNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>Add New Note</Text>
          <Icon style={styles.icon} name="add-circle-outline"/>
        </View>
      </Pressable>
      <Pressable onPress={() => onExit(ScreenType.allNotes)}>
        <View style={styles.itemButton}>
          <Text  style={styles.title}>View All Notes</Text>
          <Icon style={styles.icon} name="arrow-forward-circle-outline" />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },

  itemButton: {
    width: Dimensions.get("window").width - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation:10,
    //para IOS 
    shadowOffset: { width: 2, height: 10},
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2
  },

  title: {
    fontSize: 30,
    fontWeight:"500",
    textAlign:"center"
  },

  icon: {
    fontSize:35,
    paddingTop:15
  }

});
