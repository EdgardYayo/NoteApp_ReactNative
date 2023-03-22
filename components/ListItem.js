import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


const ListItem = ({ note }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>
        <Icon style={styles.logo} name="logo-android"/>
        { note }
      </Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItem:{
        borderWidth:4,
        borderColor:"#000",
        padding:10,
        borderRadius:5,
        backgroundColor:"#fff000",
        marginTop:20,
    },

    noteText:{
        fontSize:20,
        fontWeight:"400",
    },

    logo: {
        fontSize:25,
        color:"#000",
        fontWeight:"bold",
    }
})