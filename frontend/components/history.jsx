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
