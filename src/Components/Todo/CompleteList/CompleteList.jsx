import React, {Component} from 'react';
import {CompleteListItem} from "./CompleteListItem/CompleteListItem";
import {connect} from "react-redux";

class CompleteList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {completeTodo} = this.props;
        return (
            <div>
                {
                    completeTodo.length ?
                        completeTodo.map((item) => (
                            <CompleteListItem id={item._id} key={item._id} text={item.text}/>
                        )) : null
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    completeTodo: store.todo.completeTodo,
})
export default connect(mapStateToProps)(CompleteList);
