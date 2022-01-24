import React from 'react';
import ReactDOM from 'react-dom';
import Exchanges from './Exchanges';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Exchanges />, div);
  ReactDOM.unmountComponentAtNode(div);
});