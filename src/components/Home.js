import { View, Text, FlatList, TouchableOpacity, Linking, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CQuestionsData from '../common/CQuestionsData';

const Home = ({props,navigation}) => {

    const [reactNativeData, setReactNativeData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const getQuestions = (page) => {
        setLoading(true)
        axios.get(`https://api.stackexchange.com//2.3/questions?page=${page}&pagesize=10&order=desc&max=1691193600&tagged=react-native&sort=activity&site=stackoverflow`, {})
            .then(function (response) {
                setLoading(false)
                console.log("=================response?.data?.items===============", response?.data?.items)
                const newArr = reactNativeData.concat(response?.data?.items)
                setReactNativeData(newArr)
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            })
    }

    useEffect(() => {
        getQuestions(1)
    }, [])

    const fetchMore = async () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        getQuestions(nextPage);
    };


    // {console.log("=======reactNativeData========",reactNativeData,"==============reactNativeData============")}
    return (
        <View style={{ width: "100%", height: "100%", marginTop: "15%",marginBottom:"10%" }}>
           <CQuestionsData tag="react-native" navigation={navigation} />
        </View>
    )
}

export default Home