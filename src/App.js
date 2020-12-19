import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem()
    // this.props.store.dispatch(addItem());
    //dispatches an action to the store
    //still relies on redux and store avail
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

//now App has a dispatch function available to it at this.props.addItem

//makes state.items avail to App as this.props.items

//connect 2nd function passes in dispatch fn NOT state
export default connect(mapStateToProps, {addItem})(App);
//no need for mapDispatchToProps here
