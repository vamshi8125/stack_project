import { View, Text } from 'react-native'
import React from 'react'
import CQuestionsData from '../common/CQuestionsData'
import Cheader from '../common/Cheader'

const ReactStack = ({ props, navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%", marginTop: "15%", marginBottom: "10%" }}>
      <Cheader title={"React JS"} />
      <CQuestionsData tag="reactjs" navigation={navigation} />
    </View>
  )
}

export default ReactStack