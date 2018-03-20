import { connect } from 'react-redux';
import { saveSearch } from '../actions/history_actions';
import Home from './home';

const mapStateToProps = ({search}) => ({
  search: search
})

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (search) => dispatch(saveSearch(search))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
