import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: "13%",
        backgroundColor: Platform.OS == "android" ? "#f96d00" : "white",
        paddingTop: 30,
        borderWidth:2,
        borderColor:"#aaa",
        elevation:5
    },
    headerTitle: {
        color: Platform.OS == "android" ? "#222831" : "purple",
        fontSize: 30,
        fontWeight: "800",
        margin: 10,
        textAlign:"left",
    }
})