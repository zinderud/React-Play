import { combineReducers, createStore } from 'redux'

const peapleReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_NAME": {
            return {state:{}, name: action.payload };
            break;
        }

        case "SET_AGE": {
            return {  state:{}, age: action.payload };
            break;
        }
    }
    return state;
}
const postReducer =(state=[],action)=>{
    switch(action.type){
        case "ADD_POST":{
            return state.concat({
                id:Date.now(),text:action.payload
            });
            break;
        }
    }
return state;
}
 
 const reducers=combineReducers({
      peaple:peapleReducer,
      post:postReducer,
 })
 const store=createStore(reducers);
 store.subscribe(()=>  {
         console.log("store changed",store.getState());
 
 var resoult=store.getState();

var para = document.createElement("p");
var node = document.createTextNode(resoult.peaple.age);
para.appendChild(node);
var element = document.getElementById("app");
element.appendChild(para);
 })

 store.dispatch({type:"SET_NAME",payload:"ali"})
 store.dispatch({type:"SET_AGE",payload:38})
  store.dispatch({type:"SET_AGE",payload:39})
   store.dispatch({type:"ADD_POST",payload:"Bir post denemesi"})
      store.dispatch({type:"ADD_POST",payload:"Başka Bir post denemesi"})
