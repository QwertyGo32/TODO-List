import React, {Component} from 'react';
import {Btn} from "../../../../Btn/Btn";

export const DeleteBtn = ({action}) => {
    return (
        <div>
            <Btn text={"delete"} action={action}/>
        </div>
    );
}

