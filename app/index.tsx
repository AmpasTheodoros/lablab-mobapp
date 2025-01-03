import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <Text className="text-3xl font-bold text-white">App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="mt-4 bg-white p-4 rounded-lg">
        <Text>Profile</Text>
      </Link>
    </View>
  )
}