import React, {Component} from 'react';

export class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, changeHandler} = this.props;
        return (
            <input onChange={changeHandler} type={"text"} value={text}/>
        );
    }
}

