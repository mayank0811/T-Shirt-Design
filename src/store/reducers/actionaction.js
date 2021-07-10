import { ADD_item } from './actiontypes';
import { DELETE_item } from './actiontypes';
import { subtract } from './actiontypes';
import { add } from './actiontypes';

export const additem = () => {
    return {
        type: ADD_item
    }
}

export const deleteitem = () => {
    return {
        type: DELETE_item
    }
}

export const add1 = () => {
    return {
        type: add
    }
}

export const subtract1 = () => {
    return {
        type: subtract
    }
}