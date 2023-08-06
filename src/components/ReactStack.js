import { View, Text } from 'react-native'
import React from 'react'
import CQuestionsData from '../common/CQuestionsData'

const ReactStack = ({props,navigation}) => {
  return (
    <View style={{ width: "100%", height: "100%", marginTop: "15%",marginBottom:"10%" }}>
    <CQuestionsData tag="reactjs" navigation={navigation} />
 </View>
  )
}

export default ReactStack