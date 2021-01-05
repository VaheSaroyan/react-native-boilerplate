import * as screens from '@/Screens'

/**
 * routes
 * @type {*[]}
 */
export const LOG_ROUTES = []

/**
 *  make route object
 * @param path
 * @param screen
 * @param params
 * @param childrenOf
 * @returns {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}}
 */
export const route = (path, screen, params = {}, childrenOf = null) => {
  const routePath = {
    route: path,
    [typeof screen === 'function' ? 'component' : 'screen']: screen,
    params,
    childrenOf: typeof params === 'string' ? params : childrenOf,
  }

  return routePath
}

/**
 * make routes array for router
 * @param routes
 * @param type
 * @returns {*}
 */

export const withRouter = (routes, type = 'Stack') => {
  return routes.map((item) => {
    if (__DEV__) {
      LOG_ROUTES.push({ ...item, type })
    }
    const params = item.params
    delete item.params
    return {
      name: item.route,
      key: ID(),
      component: screens[item.screen],
      type,
      ...params,
      ...item,
    }
  })
}

/**
 * make random id
 * @returns {string}
 * @constructor
 */
export const ID = () => '_' + Math.random().toString(36).substr(2, 36)

/**
 * group array by object key
 * @param xs
 * @param key
 * @returns {*}
 */
export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

/**
 * log all routes
 */
export const logRoutes = () => {
  console.table(LOG_ROUTES)
}

/**
 * crate navigator
 * @param routes
 * @param navigatorCreator
 * @returns {{}}
 */
export const makeNavigation = (routes, navigatorCreator) => {
  if (typeof navigatorCreator !== 'function') {
    throw new Error('navigatorCreator must be a function')
  }
  if (!Array.isArray(routes)) {
    throw new Error('routes must be a array only')
  }
  let stacks = {}

  const groupedRoutes = groupBy(routes, 'childrenOf')

  Object.keys(groupedRoutes).forEach((item) => {
    const navigator = navigatorCreator(item)
    stacks = { ...stacks, [item]: navigator(groupedRoutes[item]) }
  })

  return stacks
}

if (__DEV__) {
  setTimeout(logRoutes)
}
