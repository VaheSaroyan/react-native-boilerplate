import { route, withRouter } from '@/Helpers'

/**
 * Full screen Modal routes
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const modalRoutes = [route('ModalFirst', 'HomeTabScreensMain', {})]

export default withRouter(modalRoutes, 'Modal')
