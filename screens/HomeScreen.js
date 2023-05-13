import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  PlatformColor,
  StatusBar,
  StyleSheet,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bars3Icon } from 'react-native-heroicons/outline'
import Expenses from './Expenses'
import Incomes from '../components/Incomes'
import Balance from './Balance'
import { theme } from 'theme/theme'

export default function HomeScreen() {
  const navigation = useNavigation()
  console.log('@@ navigation', navigation)

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])

  return (
    <SafeAreaView>
      <View
        style={styles.headerContainer}
        className="w-full bg-orange-300 flex flex-row items-center justify-center relative">
        <Text className="p-4 font-semibold text-xl flex-1">
          The Money Maestro
        </Text>
        <TouchableOpacity className="pr-4" onPress={() => alert('Hello!')}>
          <Bars3Icon size={28} color={'#000000'} />
        </TouchableOpacity>
      </View>

      <View className="w-full h-full bg-orange-50 flex p-4">
        <Expenses />
        <Incomes />
        <Balance />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
        backgroundColor: PlatformColor('systemTealColor'),
      },
      android: {
        paddingTop: StatusBar.currentHeight,
        color: PlatformColor('?android:attr/textColor'),
        backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
      },
      default: { color: 'black' },
    }),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
