import { connect } from 'react-redux';
import { saveSearch } from '../actions/history_actions';
import Trivia from './trivia';

const mapStateToProps = ({search}) => ({
  search: search
})

const mapDispatchToProps = (dispatch) => ({
  // I think defining this function to dispatch this action creator
  // could have be placed somewhere else and imported. Its used in every connected component 
  saveSearch: (search) => dispatch(saveSearch(search))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trivia)
