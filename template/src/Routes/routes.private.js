import { route, withRouter } from '@/Helpers'

/**
 * routes if user doesn't sign in
 * @type {{[p: string]: *|{}|null, route: *, params: {}, childrenOf: null}[]}
 */
const privateRoutes = [
  route('SignIn', 'SignInScreen'),
  route('SignUp', 'SignUpScreen'),
]

export default withRouter(privateRoutes)
