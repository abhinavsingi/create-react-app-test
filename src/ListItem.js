import React from 'react';
import ReactDOM from 'react-dom';

import data from './data.json';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.dummyData = data;
  }

  render() {
    return (
      <div className="ListItem" id={`ListItem-${this.props.number}`}>
        <span>{`This is list item number ${this.props.number}`}</span>
      </div>
    );
  }
}

export default ListItem;
