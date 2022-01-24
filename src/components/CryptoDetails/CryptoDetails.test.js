import React from 'react';
import ReactDOM from 'react-dom';
import CryptoDetails from './CryptoDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CryptoDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});