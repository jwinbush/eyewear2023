import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { motion as m } from 'framer-motion';

ReactDOM.render(
  <React.StrictMode>
    <m.div>
    <App />
    </m.div>
  </React.StrictMode>,
  document.getElementById('root')
);