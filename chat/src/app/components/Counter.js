import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <section>
                <p>{this.props.counters.counter}</p>
                <button onClick={this.props.actions.increment}>increment</button>
                <button onClick={this.props.actions.decrement}>decrement</button>
            </section>
        );
    }
}

let mapStateToProps = (state) => ({
    counters: state.counters
});

let mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);