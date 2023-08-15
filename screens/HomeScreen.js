import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView  } from 'react-native-safe-area-context'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})