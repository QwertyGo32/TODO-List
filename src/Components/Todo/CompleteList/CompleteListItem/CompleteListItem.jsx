import React, {Component} from 'react';
import {Typography} from "./Typography/Typography";
import {RecoverBtn} from "./RecoverBtn/RecoverBtn";
import {DeleteBtn} from "./DeleteBtn/DeleteBtn";
import {useDispatch} from "react-redux";
import {deleteCompleteToDo, recoverToDo} from "../../../../redux/actions/todo";

export const CompleteListItem = ({text, id}) => {
    const dispatch = useDispatch();

    const recoverToDoItem = () => {
        dispatch(recoverToDo(id));
    }
    const deleteCompleteToDoItem = () => {
        dispatch(deleteCompleteToDo(id));
    }
    return (
        <div>
            <Typography text={text}/>
            <RecoverBtn action={recoverToDoItem}/>
            <DeleteBtn action={deleteCompleteToDoItem}/>
        </div>
    );
}

