import React, { Component } from 'react';

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // state = { 
    //     value: this.props.counter.value,
    //     tags: []
    // }

    render() {
        // console.log('Props', this.props);

        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // onClick={this.handleIncrement}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary btn-sm'>Increment
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className='btn btn-secondary btn-sm'>Decrement
                </button>
                <button 
                    onClick={() => {this.props.onDelete(this.props.counter.id)}}
                    className='btn btn-danger btn-sm m-2'>Delete
                </button>
                {/* <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> */}
                {/* <ul>{this.renderTags()}</ul> */}
                {/* {this.state.tags.length === 0 && 'Please create a new tag...'} If there is no else in the if statement */}
            </div>
        );
    }

    // handleDecrement = product => {
    //     this.setState({value: this.state.value - 1});
    // }

    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({value: this.state.value + 1});
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!!!</p>;

        return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}

export default Counter;
