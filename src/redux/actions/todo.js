import {
    COMPLETE_TODO,
    CREATE_TODO,
    DELETE_COMPLETE_TODO,
    DELETE_TODO,
    GET_TODO,
    RECOVER_TODO,
    UPDATE_TODO
} from "../constants/todo";

export const createToDo = (text) => ({
    type: CREATE_TODO,
    payload: text,
})

export const deleteToDo = (id) => ({
    type: DELETE_TODO,
    payload: id,
})

export const updateToDo = (id, text) => ({
    type: UPDATE_TODO,
    payload: {
        id: id,
        text: text,
    }
})

export const completeToDo = (id) => ({
    type: COMPLETE_TODO,
    payload: id,
})

export const recoverToDo = (id) => ({
    type: RECOVER_TODO,
    payload: id,
})

export const deleteCompleteToDo = (id) => ({
    type: DELETE_COMPLETE_TODO,
    payload: id,
})

export const getToDo = () => ({
    type: GET_TODO,
})