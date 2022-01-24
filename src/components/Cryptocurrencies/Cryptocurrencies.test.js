import React from 'react';
import ReactDOM from 'react-dom';
import Cryptocurrencies from './Cryptocurrencies';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cryptocurrencies />, div);
  ReactDOM.unmountComponentAtNode(div);
});