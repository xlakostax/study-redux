import { createStore } from 'redux'
import counterApp from '../reducers/reducers.js'

const store = createStore(counterApp);

export default store;