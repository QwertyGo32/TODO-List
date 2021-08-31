import React from 'react';

export const Btn = ({action,text}) => {
    return (
        <button onClick={action}>
            {
                text
            }
        </button>
    )
}