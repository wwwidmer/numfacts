import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Home" onClick={ () => { this.props.history.push('/home') } }/>
          <Tab label="Trivia" onClick={ () => { this.props.history.push('/trivia') } }/>
          <Tab label="Random" onClick={ () => { this.props.history.push('/random') } }/>
          <Tab label="History" onClick={ () => { this.props.history.push('/history') } }/>
        </Tabs>
      </div>
    );
  }
}

/*
* browser.js:49 Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
* (You might be able to use <Link> as a child of Tab instead of onClick to remove the above error)
*/

export default Nav;
