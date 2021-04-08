import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);//api istekleri, js fonksiyonları kullanacağımız zaman ihtiyacımız oluyor. 

export const store = createStore(rootReducer, middleware);