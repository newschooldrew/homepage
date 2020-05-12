import {addItem, deleteItem} from './utils/utils'
import { act } from 'react-dom/test-utils'

export default function Reducer (state,action){
    switch(action.type){
        case "GET_PROJECTS":
            return {
                ...state,
                projects:null
            }
        case "ADD_ITEM":
            return{
                ...state,
                selectedProjects:[...state.selectedProjects,action.payload],
                // active:!state.logos[action.payload].active
                active:!state.active
            }
        case "DELETE_ITEM":
            return{
                    ...state,
                    selectedProjects:deleteItem(state.selectedProjects,action.payload)
                    // selectedProjects:addItem(state.selectedProjects,action.payload)
                }
        case "SET_LOGOS":
            return{
                ...state,
                logos:action.payload
            }
    }
}