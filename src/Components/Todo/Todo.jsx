import React from 'react';
import style from "./Todo.module.css";
import {Form} from "./Form/Form";
import {List} from "./List/List";
import CompleteList from "./CompleteList/CompleteList";

export const Todo = () => {
    return (
        <div className={style.todo}>
            <Form/>
            <List/>
            <CompleteList/>
        </div>
    );
}



