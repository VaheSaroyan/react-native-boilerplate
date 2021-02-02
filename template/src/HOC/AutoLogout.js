import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, PanResponder, View } from 'react-native'
import { defaultTimeoutHandler, useTimeout } from 'usetimeout-react-hook'

import { navigateAndSimpleReset } from '@/navigation/config/Root'
import SignOut from '@/reducers/user/SignOut'
import { useDispatch } from 'react-redux'

const defaultTimeForInactivity = 1000 * 60 * 10

export default function (
  ComposedClass,
  { skipKeyboard = false, timeForInactivity, timeoutHandler, notActive } = {},
) {
  return (props) => {
    const dispatch = useDispatch()
    const [isActive, setIsActive] = React.useState(true)

    const onAction = (isActive) => {
      if (!isActive) {
        if (typeof notActive === 'function') notActive()
        navigateAndSimpleReset('PrivateStackNavigator')
        dispatch(SignOut.action())
      }
      setIsActive(isActive)
    }
    /**
     * If the user has provided a custom timeout handler, it is used directly,
     * otherwise it defaults to the default timeout handler (setTimeout/clearTimeout).
     */
    const actualTimeoutHandler = timeoutHandler || defaultTimeoutHandler
    const timeout = timeForInactivity || defaultTimeForInactivity
    /**
     * If the `isActive` prop is manually changed to `true`, call `resetTimerDueToActivity`
     * to reset the timer and set the current state to active until the timeout expires.
     * If the `isActive` is changed to `false`, nothing is done.
     * Note however that toggling `isActive` manually is discouraged for normal use.
     * It should only be used in those cases where React Native doesnt't seem to
     * inform the `PanResponder` instance about touch events, such as when tapping
     * over the keyboard.
     */
    const initialActive = isActive === undefined ? true : isActive
    const [active, setActive] = useState(initialActive)

    useEffect(() => {
      if (isActive) {
        resetTimerDueToActivity()
      }
    }, [isActive])

    const [date, setDate] = useState(Date.now())
    /**
     * The timeout is reset when either `date` or `timeout` change.
     */
    const cancelTimer = useTimeout(
      () => {
        setActive(false)
        onAction(false)
      },
      timeout,
      actualTimeoutHandler,
      [date, timeout],
    )
    const isFirstRender = useRef(true)
    /**
     * Triggers `onAction` each time the `active` state turns true
     * after the initial render.
     */
    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false
      } else {
        if (active) {
          onAction(true)
        }
      }
    }, [active])
    /**
     * Resets the timer every time the keyboard appears or disappears,
     * unless skipKeyboard is true.
     */
    useEffect(() => {
      if (!skipKeyboard) {
        Keyboard.addListener('keyboardDidHide', resetTimerDueToActivity)
        Keyboard.addListener('keyboardDidShow', resetTimerDueToActivity)
      }
      // release event listeners on destruction
      return () => {
        if (!skipKeyboard) {
          Keyboard.removeAllListeners('keyboardDidHide')
          Keyboard.removeAllListeners('keyboardDidShow')
        }
      }
    }, [])
    /**
     * This method is called whenever a touch is detected. If no touch is
     * detected after `this.props.timeForInactivity` milliseconds, then
     * `this.state.inactive` turns to true.
     */
    function resetTimerDueToActivity() {
      cancelTimer()
      setActive(true)
      /**
       * Causes `useTimeout` to restart.
       */
      setDate(Date.now())
    }
    /**
     * In order not to steal any touches from the children components, this method
     * must return false.
     */
    function resetTimerForPanResponder(/* event: GestureResponderEvent */) {
      // const { identifier: touchID } = event.nativeEvent;
      resetTimerDueToActivity()
      return false
    }
    /**
     * The PanResponder instance is initialized only once.
     */
    const [panResponder, _] = useState(
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: resetTimerForPanResponder,
        onPanResponderTerminationRequest: resetTimerForPanResponder,
        onStartShouldSetPanResponderCapture: resetTimerForPanResponder,
      }),
    )

    return (
      <View
        {...panResponder.panHandlers}
        style={{ flex: 1 }}
        collapsable={false}
      >
        <ComposedClass {...props} />
      </View>
    )
  }
}
