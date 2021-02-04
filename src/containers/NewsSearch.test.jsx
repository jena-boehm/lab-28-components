global.fetch = require('node-fetch');
import React from 'react';
import NewsSearch from './NewsSearch';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('NewsSearch container', () => {
  it('updates the list of articles via text input', () => {
    render(<NewsSearch />);
    
    const display = screen.getByTestId('search-results');
    const search = screen.getByLabelText('Search');

    fireEvent.change(search, {
      target: {
        value: 'news'
      }
    });

    return waitFor(() => {
      expect(display).toHaveValue('news');
    });
  });
});
