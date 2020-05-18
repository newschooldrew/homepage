import {createContext} from 'react'
import PROJECT_DATA from './data/PROJECT_DATA '
import IMG_DATA from './data/IMG_DATA'

const Context = createContext({
    projects:PROJECT_DATA,
    logos:IMG_DATA,
    selectedProjects:[],
    active:false,
    showText:true,
    showTooltip:false
})

export default Context;