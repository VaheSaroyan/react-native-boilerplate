import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/theme'

const Brand = ({ height = 200, width = 200, mode = 'contain' }) => {
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

export default Brand
