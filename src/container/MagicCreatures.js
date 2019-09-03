import { connect } from 'react-redux';
import { getCreatures } from '../selectors/magicSelectors';
import { fetchList } from '../actions/magicActions';
import Creatures from '../components/Creatures';

const mapStateToProps = state => ({
  creatures: getCreatures(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creatures);
