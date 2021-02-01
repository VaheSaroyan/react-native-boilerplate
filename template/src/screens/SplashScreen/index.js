import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'
import {appInit} from "@/store/reducers/startup/actions";

const IndexStartupContainer = ({appInit}) => {


  useEffect(() => {
      appInit()
  }, [])

  return (
    <LottieView
      source={require('./animation')}
      autoPlay
      loop
      style={{ backgroundColor: '#4187ff' }}
    />
  )
}
const mapDispatchToProps = {
    appInit,
};


export default connect(null, mapDispatchToProps)(IndexStartupContainer);
