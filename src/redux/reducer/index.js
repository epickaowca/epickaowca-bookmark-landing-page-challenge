import { types } from '../action'
const initState = {
    navEject: false,
}

const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case types.TOGGLE_NAV: return{
            ...state, navEject: !state.navEject
        }
        default: return state
    }
}

export default reducer