import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/views/theme'

export const Logo = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <Image
        style={[Layout.fullWidth, Layout.fullHeight]}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  )
}
