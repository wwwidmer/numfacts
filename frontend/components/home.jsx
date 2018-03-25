import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

// This is a stateless component, and could be simplified to just a function
// const Home = ({ ...props }) => <Card> ... </Card>
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardHeader title="Numfacts"/>
        <CardText>
          <h3>What is Numfacts?</h3>
          Numfacts is a web application that allows users to explore some facts about numbers with an interface that keeps the user engaging.

          <h3>How to use?</h3>
          Navigate using the app bar above.
        </CardText>
      </Card>
    );
  }
}

export default Home;
