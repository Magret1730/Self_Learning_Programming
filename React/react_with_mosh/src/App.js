// import logo from './logo.svg';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
        counters: [
            {id: 0, value: 4},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ]
     };

  constructor(props) {
    super(props);
    console.log('App-Constructor', this.props);
  }

  componentDidMount() {
    console.log('App mounted');
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // console.log(counters);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
  });
        this.setState({ counters });
    }

  render() {
    console.log('App-rendered');

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
