import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {

    const [reactNativeData,setReactNativeData] =useState([])
    const [currentPage,setCurrentPage] =useState(1)

    const getQuestions = (page) => {
            axios.get(`https://api.stackexchange.com//2.3/questions?page=${page}&pagesize=100&order=desc&max=1691193600&tagged=react-native&sort=activity&site=stackoverflow`, {})
                .then(function (response) {
                    let filterData = response?.data?.items?.filter((item) =>{ return item?.tags?.includes("reactjs")})
                    setReactNativeData(response?.data?.items)
                })
                .catch(function (error) {
                    console.log(error);
                })  
    }

    useEffect(() => {
        getQuestions(1)
    },[])

    const fetchMore = async () => {
    
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        const newData = await getQuestions(nextPage);
        setReactNativeData([...reactNativeData, ...newData]);
      };
    

    // {console.log("=======reactNativeData========",reactNativeData,"==============reactNativeData============")}
    return (
        <View style={{ width: "100%", height: "100%",marginTop:"15%"}}>
           {/* <View style={{height:400, backgroundColor:'red'}}> */}
           <FlatList 
                data={reactNativeData}
                 keyExtractor={(item) => item.id}
                 onEndReached={fetchMore}
                 onEndReachedThreshold={0.1}
                renderItem={({item}) => {
                //    { console.log("============item=============",item,"------------------item=================")}
                       return(
                       <View style={{width:"100%"}}>
                        <TouchableOpacity style={{backgroundColor:"lightgray",marginHorizontal:20,borderRadius:20,marginVertical:10}} onPress={() => Linking.openURL(item.link)}>
                            <Text style={{color:"red",padding:20}}>
                                {item.title}
                            </Text>
                            </TouchableOpacity>
                        </View>)
                }}
           />
             {/* </View> */}
          
        </View>
    )
}

export default Home