import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Options from '../components/Options';
import { actions } from '../actions/options';

function mapStateToProps(state) {
  return {
    height: state.options.height,
    width: state.options.width,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
