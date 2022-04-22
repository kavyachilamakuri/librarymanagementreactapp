import * as mutationType from './mutation-types';
const initialState={
    courses:[],
    course:{}
}
export default function courseReducer(state=initialState,action){
    switch(action.type){
        case mutationType.GET_COURSES:{
            return{
            ...state,
            courses:action.payload
            }
        }
    }
}