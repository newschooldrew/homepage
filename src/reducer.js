import {addItem, deleteItem} from './utils/utils'
import { act } from 'react-dom/test-utils'

export default function Reducer (state,action){
    switch(action.type){
        case "GET_PROJECTS":
            return {
                ...state,
                projects:null
            }
        case "SET_LOGOS":
            return{
                ...state,
                logos:action.payload
            }
        case "SHOW_TEXT":
            return{
                ...state,
                showText:action.payload
            }
        case "CLEAR_PROJECTS":
            return{
                ...state,
                projects:[]
            }
    }
}