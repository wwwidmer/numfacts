import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {fetchRandomData} from '../util/numbers_api';

class Random extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 2,
      data : '2 is the price in cents per acre the USA bought Alaska from Russia.'
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
