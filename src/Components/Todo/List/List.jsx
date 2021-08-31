import React from 'react';
import {ListItem} from "./ListItem/ListItem";
import style from "./List.module.css"
import {useSelector} from "react-redux";

export const List = ({changeHandler}) => {
    const todo = useSelector(state => state.todo.todo)
    return (
        <div className={style.list}>
            {
                todo.length?
                    todo.map((item) => (
                        <ListItem changeHandler={changeHandler} id={item._id} key={item._id} defaultText={item.text}/>
                    )) : null
            }
        </div>
    );
}


