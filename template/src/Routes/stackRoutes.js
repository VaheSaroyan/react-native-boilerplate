import { route, withRouter } from '@/Helpers'

//Example make drawer navigator
// const { HomeStack } = makeNavigation(drawerRoutes, crateDrawer)

/**
 * Main Stack routes
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const mainRoutes = [
  route('HomeScreen', 'HomeTabScreensMain', 'HomeTab'),
  route('First', 'HomeTabScreensFirst', 'HomeTab'),
  route('Second', 'HomeTabScreensSecond', 'HomeTab'),
  route('Settings', 'LastTabScreensMain', 'SettingTab'),
  route('ModalFirst', 'LastTabScreensSecond'),
]

export default withRouter(mainRoutes, 'Stack')
