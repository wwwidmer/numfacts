import React from 'react';
import AppBar from 'material-ui/AppBar';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  render() {
    return (
      <AppBar
        title="Numfacts"
      />
    )
  }
}

export default Home;
