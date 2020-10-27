import React from 'react';
import { render } from '@testing-library/react';

import NoResults from '../index';

describe('NoResults', () => {
  test('renders No Results component', () => {
    render(<NoResults />);
  });
});
