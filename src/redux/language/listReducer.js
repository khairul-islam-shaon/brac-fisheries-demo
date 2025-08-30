import { FETCH_LANGUAGE_REQ } from "./listType"

const initialState = {
    loading: false,
    data : "EN",
    err: ''
}

const LanguageReducer = (store = initialState, action) =>{

    switch(action.type){
        
        case FETCH_LANGUAGE_REQ : 
        // console.log(action.payload)
            return{
                loading: false,
                data: action.payload,
            }

        default : return store
    }
}
export default LanguageReducer