import React, {Component} from 'react';
import {Btn} from "../../../../Btn/Btn";

export class UpdateBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {action} = this.props;
        return (
            <div>
                <Btn action={action} text={"edit"} />
            </div>
        );
    }
}

