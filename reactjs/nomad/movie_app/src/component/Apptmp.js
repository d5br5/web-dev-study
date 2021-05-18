import Food from "./Food";


const foodILike = [
    {id: 1, name: "kimchi", age: 31},
    {id: 2, name: "samgyeopsal", age: 22},
    {id: 3, name: "egg", age: 55}
];

function printFood() {
    return (
        <div className="App">
            OLLEH
            {foodILike.map(dish => <Food key={dish.id} name={dish.name} age={dish.age}/>)}
        </div>
    )
}

// function App() {
//     return printFood();
// }

class Apptmp extends React.Component {
    state = {
        count: 0,
        isLoading: true,
        movies: []
    };

    constructor(props) {
        super(props);
        console.log("hello");
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I just updated");
    }

    componentWillUnmount() {
        console.log("byebye");
    }

    add = () => {
        this.setState(current => ({count: current.count + 1}));
        console.log("add");
    };

    minus = () => {
        this.setState(current => ({count: current.count - 1}));
        console.log("minus");
    }

    render() {
        console.log("I'm rendering");
        const {isLoading} = this.state;

        return (
            <div>
                <div>{isLoading ? "Loading" : "We are ready"}</div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>);
    }
}


export default Apptmp;