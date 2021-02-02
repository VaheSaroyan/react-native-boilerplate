import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InitStartup from '@/reducers/startup/Init'
import LottieView from 'lottie-react-native'

const IndexStartupContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <LottieView
      source={require('./animation')}
      autoPlay
      loop
      style={{ backgroundColor: '#4187ff' }}
    />
  )
}

export default IndexStartupContainer
