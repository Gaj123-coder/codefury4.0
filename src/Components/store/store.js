import {configureStore,createSlice} from "@reduxjs/toolkit";
const Authentication=createSlice({
    name:"Auth",
    initialState:{email:"",pswrd:""},
    reducers:{
        settingEmail(state,action){
            state.email=action.payload.email;
        },
        settingPswrd(state,action){
            state.pswrd=action.payload.pswrd;
        },
        clearAll(state){
            state.email="";
            state.pswrd="";
        }
    }
});
const login=createSlice({
    name:"login",
    initialState:{login:false},
    reducers:{
        login(state){
            state.login=true;
        },
        logout(state){
            state.login=false;
        }
    }
})
const store=configureStore({
    reducer:{
        Auth:Authentication.reducer,
        Login:login.reducer,
    }
});


export default store;
export const Login_actions=login.actions;
export const Auth_actions=Authentication.actions;