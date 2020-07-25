import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as userLogins from '../_action/userActions';
import {User} from "../_models/user";

export interface UserState{
    entities:Array<User>
}
const initialState: UserState = {
    entities:[]
};

export function userReducer(state = initialState,action:userLogins.Actions): UserState{
    switch(action.type){
        case userLogins.ActionTypes.CHECK_LOGIN:{
            const  user:User = action.payload;
            return{
                entities:[...state.entities,user]
            }
        }
        case userLogins.ActionTypes.LOGOUT:{
            return{
                ...state,
                entities:[]
            }
        }
        default:{
            return state;
        }
    }
}