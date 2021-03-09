import { connect } from 'react-redux';

import {
  applyIncrement,
  applyDecrement
} from "./actions/actions.js"
import store from "./store/store.js"

console.log(store.getState())

/* To reach store and dispatch in the component one needs to map them to props and then to attach to App component via connect() */
const mapStateToProps = store => {
  return {
    value: store.value,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(applyIncrement()),
    decrement: () => dispatch(applyDecrement()),
  }
}

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(applyIncrement())
// store.dispatch(applyIncrement())
// store.dispatch(applyIncrement())
// store.dispatch(applyDecrement())
// unsubscribe()

const App = (props) => {
  console.log("props: ", props)
  const {value, increment, decrement} = props
  return (
    <div className="App">
      <ul>
        <li onClick = {decrement}>-</li>
        <li>{value}</li>
        <li onClick = {increment}>+</li>
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
