import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
const LoadingScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace("Home")
        }, 1000);
    },[])
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "black", color: "white" }}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white", textAlign: "center" }}>Loading...</Text>
            <ActivityIndicator size={"large"} color={"green"} />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})