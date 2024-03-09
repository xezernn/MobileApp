import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigate from './authNavigate'
import UserNavigate from './userNavigate'

const rootNavigate = () => {
  const isAuth = false
  return (
    <NavigationContainer  >
      {
        !isAuth ? <AuthNavigate /> : <UserNavigate />
      }

    </NavigationContainer>
  )
}

export default rootNavigate

const styles = StyleSheet.create({})