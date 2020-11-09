export const types = {
    TOGGLE_NAV: 'TOGGLE_NAV',
    SET_FEATURE: 'SET_FEATURE',
    SET_FAQ: 'SET_FAQ'
}

export const toggleNav = ()=>{
    return{
        type: types.TOGGLE_NAV  
    }
}

export const SetFeature = id=>{
    return{
        type: types.SET_FEATURE,
        payload: id
    }
}

export const SetFaq = id=>{
    return{
        type: types.SET_FAQ,
        payload: id
    }
}