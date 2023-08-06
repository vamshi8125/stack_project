import { View, Text, FlatList, TouchableOpacity, Linking, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CQuestionsData = (props) => {

    const [reactNativeData, setReactNativeData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const getQuestions = (page) => {
        setLoading(true)
        // alert(props?.tag)
        axios.get(`https://api.stackexchange.com//2.3/questions?page=${page}&pagesize=10&order=desc&max=1691193600&tagged=${props?.tag}&sort=activity&site=stackoverflow`, {})
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
        const unsubscribeNavigationFocus = props.navigation.addListener(
            'focus',
            async () => {
               await getQuestions(1)
            }
          );
          return unsubscribeNavigationFocus
       
    }, [props?.navigation])

    const fetchMore = async () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        getQuestions(nextPage);
    };


    // {console.log("=======reactNativeData========",reactNativeData,"==============reactNativeData============")}
    return (
        <View style={{ width: "100%", height: "100%", marginTop: "15%",marginBottom:"10%" }}>
            {/* <View style={{height:400, backgroundColor:'red'}}> */}
            <FlatList
                data={reactNativeData}
                keyExtractor={(item) => item.id}
                onEndReached={fetchMore}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => {
                    //    { console.log("============item=============",item,"------------------item=================")}
                    return (
                        <View style={{ width: "100%" }}>
                            <TouchableOpacity style={{ backgroundColor: "lightgray", marginHorizontal: 20, borderRadius: 20, marginVertical: 10 }} onPress={() => Linking.openURL(item.link)}>
                                <Text style={{ color: "red", padding: 20 }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        </View>)
                }}
            />
            {/* </View> */}
            {loading && <View style={{position:"absolute",zIndex:99,alignItems:"center",justifyContent:"center"}}>
                <ActivityIndicator size="large" color="#00ff00"/>
            </View>}
        </View>
    )
}

export default CQuestionsData