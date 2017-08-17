import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.total || 0;
  },
  render: function() {
    return <div className="results">
        <div>
          <h1>Total: {this.props.total}</h1>
        </div>
    </div>;
  }
});