import React from 'react';
import Total from './Total';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const order =  React.createClass({
  getMenu: function() {
    return this.props.menu || [];
  },

  getOrder: function() {
    return this.props.ordered || [];
  },

  render: function() {
    return <div className="order">
      {this.getMenu().map(entry =>
        <button key={entry} onClick={() => this.props.order(entry)}>
          {entry}
        </button>
      )}
      <Total total={this.props.total} />
      {this.getOrder().map((entry, index) =>
        <div key={index} onClick={() => this.props.deleteEntry(entry)}>
          {entry}
        </div>
      )}
      <button onClick={() => this.props.clearOrder()}>Reset</button>
    </div>
  }
});


function mapStateToProps(state) {
  return {
    menu: state.get('currentMenu'),
    total: state.get('total'),
    ordered: state.get('ordered')
  };
}

export const OrderContainer = connect(mapStateToProps, actionCreators)(order);

