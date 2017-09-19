import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Amun from './store/Amun'
import App from './App'

const store = Amun();
console.log(store.getState());
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
