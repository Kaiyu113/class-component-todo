import { connect } from "react-redux";
import Cal from "../calculator/index";
import { add, sub, asyncAdd } from "../redux/calAction";

//create container
const connector = connect(
  (state) => ({
    count: state,
  }),
  {
    add,
    sub,
    asyncAdd,
  }
)(Cal);
export default connector;
