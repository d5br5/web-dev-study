import {connect} from "react-redux";
import {Link} from "react-router-dom"
import {remove} from "../store";

const Detail = ({toDos, onBtnClick}) => {
  console.log(toDos);
  return <div>
    <h1>Detail</h1>
    <h2>ID : {toDos.id}</h2>
    <h2>DO : {toDos.text}</h2>
    <Link to="/">go home<button onClick={onBtnClick}>DELETE</button></Link>

  </div>
}

function mapStateToProps(state, ownProps) {
  const {match: {params: {id}}} = ownProps;
  return {toDos: state.find(a => a.id === parseInt(id))};
}

function mapDispatchToProps(dispatch, ownProps) {
  const {match: {params: {id}}} = ownProps;
  const parsed = parseInt(id);
  return {
    onBtnClick: () => {
      dispatch(remove(parsed));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);