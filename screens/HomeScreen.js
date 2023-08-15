import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import TrendingComponent from '../components/TrendingComponent'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <Header />
        <TrendingComponent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})