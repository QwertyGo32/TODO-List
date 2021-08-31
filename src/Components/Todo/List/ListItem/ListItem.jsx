import React, {Component, useEffect, useState} from 'react';
import {Typography} from "./Typography/Typography";
import style from "./ListItem.module.css";
import {useDispatch} from "react-redux";
import {completeToDo, deleteToDo, updateToDo} from "../../../../redux/actions/todo";
import {UpdateBtn} from "./UpdateBtn/UpdateBtn";
import {DeleteBtn} from "./DeleteBtn/UpdateBtn";
import {CompleteBtn} from "./CompleteBtn/CompleteBtn";

export const ListItem = ({defaultText, id}) => {
    const [editStatus, setEditStatus] = useState(false);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const changeEditStatus = () => {
        setEditStatus(!editStatus)
    };

    useEffect(() => {
        setText(defaultText)
    }, [])

    const changeHandler = ({target: {value}}) => {
        setText(value);
    };

    const deleteToDoItem = (id) => {
        dispatch(deleteToDo(id))
    }

    const updateToDoItem = (id, text) => {
        if (editStatus) {
            dispatch(updateToDo(id, text));
            changeEditStatus();
        } else {
            changeEditStatus();
        }
    }

    const completeToDoItem = (id) => {
        dispatch(completeToDo(id));
    }

    return (
        <div className={style.listItem}>
            {
                editStatus ? <input onChange={changeHandler} value={text} type="text"/> :
                    <Typography text={text}/>
            }
            <CompleteBtn action={(e) => completeToDoItem(id)} id={id}/>
            <UpdateBtn action={(e) => updateToDoItem(id, text)} id={id} text={text}/>
            <DeleteBtn action={(e) => deleteToDoItem(id)} id={id}/>
        </div>
    );
}

