import React from 'react';
import _ from 'lodash';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data : 'There is no number history here :('
    }
  }

  componentDidMount() {
    this.setState({
      // This is an unnecessary step, we can just use this.props in render, no?
      // With this, the message placed in the constructor never actually shows because
      // even if there is no search history its just going to undefined.
      data: this.props.search.search
    });
  }

  render() {
    return (
      <Card>
        <CardHeader title='Your Number Search History' />
        <CardText>
          {
            this.state.data
          }
        </CardText>
      </Card>
    );
  }
}

export default History;
