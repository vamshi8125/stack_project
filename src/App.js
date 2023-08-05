import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import ReactStack from './components/ReactStack';
import NodeStack from './components/NodeStack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {

    function MyTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="ReactStack" component={ReactStack} options={{ headerShown: false }}/>
                <Tab.Screen name="NodeStack" component={NodeStack} options={{ headerShown: false }}/>
            </Tab.Navigator>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomHome" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App