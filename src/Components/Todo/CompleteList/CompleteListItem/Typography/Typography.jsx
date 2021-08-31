import React, {Component} from 'react';

export class Typography extends Component {
    render() {
        const {text} = this.props;

        return (
            <div>
                {text}
            </div>
        );
    }
}

