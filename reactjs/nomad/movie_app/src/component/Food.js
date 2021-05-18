import PropTypes from "prop-types";

function Food(props) { // == {name, age}

    return (
        <h1>{renderFood(props)}</h1>
        //<h1>I like {props.name}, {props.age}</h1>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    rating: PropTypes.number
}

function renderFood(dish) {
    return (
        <div>{dish.name}, {dish.age}</div>
    )
}

export default Food;