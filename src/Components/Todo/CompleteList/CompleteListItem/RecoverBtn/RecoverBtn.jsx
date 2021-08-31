import React, {Component} from 'react';
import {Btn} from "../../../../Btn/Btn";

export const RecoverBtn = ({action}) => {
        return (
            <div>
                <Btn text={"recover"} action={action}/>
            </div>
        );
}

