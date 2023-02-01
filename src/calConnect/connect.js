import { connect } from "react-redux";
import Cal from "../calculator/index";
import { add, sub, asyncAdd } from "../redux/calAction";
//mapStateToProps
const mapStateToProps = (state) => ({
  count: state,
});
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch(add(data)),
  sub: (data) => dispatch(sub(data)),
  asyncAdd: (data, time) => dispatch(asyncAdd(data, time)),
});
//create container
const connector = connect(mapStateToProps, mapDispatchToProps)(Cal);
export default connector;
