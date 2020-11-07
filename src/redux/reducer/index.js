import { types } from '../action'
const initState = {
    navEject: false,
    feature: 1
}

const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case types.TOGGLE_NAV: return{
            ...state, navEject: !state.navEject
        }
        case types.SET_FEATURE: return{
            ...state, feature: payload
        }
        default: return state
    }
}

export default reducer