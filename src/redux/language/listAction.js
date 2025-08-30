import {FETCH_LANGUAGE_REQ} from "./listType";

export const fetch_language = (data)=>{

    return {
         type: FETCH_LANGUAGE_REQ,
         payload: data
    }
 }