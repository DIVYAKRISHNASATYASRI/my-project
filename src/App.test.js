import React from 'react';
import ReactDOM from 'react-dom';
import Convert from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Convert/>, div);
  ReactDOM.unmountComponentAtNode(div);
});