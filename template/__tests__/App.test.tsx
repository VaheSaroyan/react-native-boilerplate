/**
 * @format
 */

import React from 'react';

import { it } from '@jest/globals';
import renderer from 'react-test-renderer';

import App from '../src/App';
import 'react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});
