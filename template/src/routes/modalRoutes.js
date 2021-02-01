import { route, withRouter } from '@/utils'

/**
 * Full screen Modal routes
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const modalRoutes = [route('ModalFirst', 'HomeTabScreensMain', {})]

export default withRouter(modalRoutes, 'Modal')
