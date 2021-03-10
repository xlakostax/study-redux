import {connect} from "react-redux"
import store from "./store/store.js"
import {
  actionFontColor,
  actionBackgroundColor
} from "./actions/actions.js"

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(actionFontColor())
// store.dispatch(actionBackgroundColor())
// unsubscribe()

const mapStateToProps = store => {
  return {
    backgroundColor: store.backgroundColor,
    color: store.color,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    applyColor: () => dispatch(actionFontColor()),
    applyBackgroundColor: () => dispatch(actionBackgroundColor()),
  }
}

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
