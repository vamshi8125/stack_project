import { View, Text } from 'react-native'
import React from 'react'
import CQuestionsData from '../common/CQuestionsData'
import Cheader from '../common/Cheader'

const NodeStack = ({ props, navigation }) => {
    return (
        <View style={{ width: "100%", height: "100%", marginTop: "15%", marginBottom: "10%" }}>
            <Cheader title={"Node JS"} />
            <CQuestionsData tag="Nodejs" navigation={navigation} />
        </View>
    )
}

export default NodeStack