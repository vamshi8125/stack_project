import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cloader = () => {
  return (
    <View style={styles.container}>
       <ActivityIndicator size="large" color="gray"/>
    </View>
  )
}

export default Cloader

const styles = StyleSheet.create({
    container:{
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        width:150,
        height:150,
        borderRadius:20,
        backgroundColor:"white",
        elevation:6,
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    }
})