global.fetch = require('node-fetch');
import React from 'react';
import NewsSearch from './NewsSearch';
import { render, screen, fireEvent } from '@testing-library/react';

describe('NewsSearch container', () => {
  it('updates the list of articles via text input', () => {
    render(<NewsSearch />);

    
  });
});

