import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = (props) => {

    useEffect(() =>{
        setTimeout(() => {
            props.navigation.navigate("BottomHome")
        },2000)
        
    },[])

  return (
    <View style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"lightgray"}}>
     <Image source={require("../assets/stack.png")} style={{width:300,height:200}} resizeMode={"contain"}/>
     <Text style={{marginTop:10}}>
        {"Stack Overflow1"}
     </Text>
    </View>
  )
}

export default SplashScreen