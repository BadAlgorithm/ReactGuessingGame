
export const checkNum = store => next => action => {
    "use strict";
    if (action.type === "hello"){
        console.log("hello")
    }
};