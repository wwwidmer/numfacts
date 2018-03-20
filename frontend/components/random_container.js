import { connect } from 'react-redux';
import { saveSearch } from '../actions/history_actions';
import Random from './random';

const mapStateToProps = ({search}) => ({
  search: search
})

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (search) => dispatch(saveSearch(search))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Random)
