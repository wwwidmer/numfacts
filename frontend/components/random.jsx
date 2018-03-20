import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {fetchRandomData} from '../util/numbers_api';

class Random extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 5,
      data : '5 is the number of Korotkoff sounds when measuring blood pressure.'
    }
  }

  componentDidMount() {
    fetchRandomData(this);
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.state.number} />
        <CardText>
          {this.state.data}
        </CardText>
      </Card>
    );
  }
}

export default Random;
