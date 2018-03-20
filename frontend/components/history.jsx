import React from 'react';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        this is history
      </div>
    );
  }
}

export default History;
