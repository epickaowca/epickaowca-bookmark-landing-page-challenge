import { types } from '../action'
const initState = {
    navEject: false,
    feature: 1,
    faq: [false, false, false, false]
}

const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case types.TOGGLE_NAV: return{
            ...state, navEject: !state.navEject
        }
        case types.SET_FEATURE: return{
            ...state, feature: payload
        }
        case types.SET_FAQ:
        return{
            ...state, faq: state.faq.map((item, index)=>index===payload ? item=!state.faq[index] : item=false)
        }
        default: return state
    }
}

export default reducer