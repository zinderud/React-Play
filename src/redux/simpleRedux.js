import { createStore } from "redux";

 
const reducer=(son=0,action) =>{
    if(action.type=="TOP"){
        return son+1;
    } else if (action.type=="CIK")
    { 
        return son-1;
    }
    return son;
}

   const store=createStore(reducer,1);

export default store.subscribe(()=>{
    console.log("store changed",store.getState());
 

var para = document.createElement("p");
var node = document.createTextNode(store.getState());
para.appendChild(node);
var element = document.getElementById("app");
element.appendChild(para);
})

store.dispatch({type:"TOP"});
store.dispatch({type:"TOP"});
store.dispatch({type:"TOP"});
store.dispatch({type:"TOP"});
store.dispatch({type:"CIK"});

