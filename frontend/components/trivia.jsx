import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {fetchData} from '../util/numbers_api';

class trivia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      data : '1 is the number of dimensions of a line.'
    }
  }

  componentDidMount() {
    fetchData(this.state.number, 'trivia', this);
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

export default trivia;
