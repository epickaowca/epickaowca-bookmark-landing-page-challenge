export const types = {
    TOGGLE_NAV: 'TOGGLE_NAV',
    SET_FEATURE: 'SET_FEATURE'
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