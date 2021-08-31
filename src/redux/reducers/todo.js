import {
    COMPLETE_TODO,
    CREATE_TODO,
    DELETE_COMPLETE_TODO,
    DELETE_TODO,
    GET_TODO,
    RECOVER_TODO,
    UPDATE_TODO
} from "../constants/todo";

const initialState = {
    todo: [],
    error: '',
    completeTodo: [],
}

export const toDoReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CREATE_TODO:
            let obj = {
                _id: Math.random() * 1000,
                text: payload,
            }
            return {
                ...state,
                todo: [...state.todo, obj],
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((item) => item._id !== payload)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todo: state.todo.map((item) => {
                    if (item._id === payload.id) {
                        item.text = payload.text
                        return item
                    } else {
                        return item
                    }
                })
            }
        case COMPLETE_TODO:
            return {
                ...state,
                completeTodo: [...state.completeTodo, state.todo.find((item) => item._id === payload)],
                todo: state.todo.filter((item) => item._id !== payload)
            }
        case RECOVER_TODO:
            return {
                ...state,
                completeTodo: state.completeTodo.filter((item) => item._id !== payload),
                todo: [...state.todo, state.completeTodo.find((item) => item._id === payload)],
            }
        case DELETE_COMPLETE_TODO:
            return {
                ...state,
                completeTodo: state.completeTodo.filter((item) => item._id !== payload),
            }
        case GET_TODO:
            return state
        default:
            return state;
    }
}