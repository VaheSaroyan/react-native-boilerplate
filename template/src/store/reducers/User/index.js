import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from './FetchOne'
import SignIn from './SignIn.js'
import SignOut from './SignOut.js'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  isAuthenticated: false,
}

export default buildSlice(
  'user',
  [FetchOne, SignIn, SignOut],
  sliceInitialState,
).reducer
