/**
 * @format
 */

import 'react-native';

// @ts-ignore
import renderer from 'react-test-renderer';

import App from '../src';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});
