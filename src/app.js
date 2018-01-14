import React from "react";
import ReactDom from "react-dom";
import RootComponent from "./root_objects/RootComponent";
import store from "./store"
import {Provider} from "react-redux";

ReactDom.render(
    <Provider store={store}>
        <RootComponent/>
    </Provider>,
    document.getElementById("app")
);