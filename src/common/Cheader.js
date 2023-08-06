import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cheader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{props.title}</Text>
    </View>
  )
}

export default Cheader

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:50,
        backgroundColor:"lightgray",
        alignItems:"center",
        justifyContent:"center"
    },
    headerStyle:{
        fontSize:20,
        color:"darkblack",
        fontWeight:"bold"
    }
})