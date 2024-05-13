import NewsList from '@/components/NewsList';
import { Link } from 'expo-router'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, ScrollView, Pressable, Linking } from 'react-native'

const Index = () => {
  return (
    <ScrollView style={{ padding: 10, backgroundColor: '#121212' }}>
      <NewsList />
    </ScrollView>
  )
}

export default Index