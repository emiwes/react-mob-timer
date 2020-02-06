import { Middleware, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";


const configureStore = () => {
    const middleWare: Middleware[] = [];
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

}

export default configureStore;