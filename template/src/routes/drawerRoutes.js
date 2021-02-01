import { route, withRouter } from '@/utils'

/**
 * Drawer navigation routes
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const drawerRoutes = [
  route('DrawerFirst', 'LastTabScreensSecond', {}, 'HomeStack'),
  route('DrawerSecond', 'SecondTabScreensMain', {}, 'HomeStack'),
]

export default withRouter(drawerRoutes, 'Drawer')
