import React from 'react';

class Random extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.history);
  }

  render() {
    return (
      <div>
        this is random
      </div>
    );
  }
}

export default Random;
