import React from 'react';
import { render } from '@testing-library/react';

import Home from '../index';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
  });
});
