import React, {Component} from 'react';

export class Typography extends Component {
    render() {
        const {text} = this.props;

        return (
            <p>
                {text}
            </p>
        );
    }
}

