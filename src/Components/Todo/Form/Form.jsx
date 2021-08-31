import React, {Component, useState} from 'react';
import {Input} from "./Input/Input";
import {Btn} from "./Btn/Btn";
import { useDispatch} from "react-redux";
import {createToDo} from "../../../redux/actions/todo";

export const Form = (props) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const changeHandler = ({target: {value}}) => {
        setText(value);
    }

    const submitHandler = (text) => {
        dispatch(createToDo(text))
        setText("")
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            submitHandler(text)
        }}>
            <Input text={text} changeHandler={changeHandler}/>
            <Btn/>
        </form>
    )
}


