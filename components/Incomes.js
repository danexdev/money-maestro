import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import clsx from 'clsx'

export default function Incomes() {
  console.log('@@ StatusBar.currentHeight', StatusBar.currentHeight)
  return (
    <View
      className={clsx('shadow-lg bg-orange-200 p-2', 'className')}
      style={styles.container}>
      <Text>Incomes </Text>
      <Text>Incomes</Text>
      <Text>Incomes</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    // backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: StatusBar.currentHeight,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
