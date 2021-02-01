import * as React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { makeNavigation, route, withRouter } from '@/utils'
import stackRoutes from './stackRoutes'
import createStack from '@/utils/crateStack'

/**
 * children of names
 */

const { HomeTab, SettingTab } = makeNavigation(stackRoutes, createStack)
/**
 * make tab bar options
 * @param icon
 * @param tabBarLabel
 * @returns {{options: {tabBarLabel, tabBarIcon: (function({color: *, size: *}))}}}
 */
const makeOptions = (icon, tabBarLabel) => {
  return {
    options: {
      tabBarIcon: ({ color, size }) => (
        <Icon name={icon} color={color} size={size} />
      ),
      tabBarLabel,
    },
  }
}

/**
 * Make Tab Bar routes
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const tabRoutes = [
  route('Home', HomeTab, makeOptions('home', 'Home')),
  route('Setting', SettingTab, makeOptions('cogs', 'Settings')),
]

export default withRouter(tabRoutes, 'Tab')
