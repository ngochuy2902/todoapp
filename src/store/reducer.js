import { ADD_TODO, REMOVE_TODO, SET_TODO_INPUT } from "./constants";

const initialState = {
    todos: [],
    input: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                input: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            const todos = [...state.todos];
            todos.splice(action.payload, 1);
            return {
                ...state,
                todos: [...todos],
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initialState };
export default reducer;

