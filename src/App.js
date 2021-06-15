import React from 'react';
import Home from './component/home';
import MovieDetails from './component/movieDetails/movieDetails';
import Header from './component/header/header';
import {BrowserRouter,Route} from 'react-router-dom'
import AddMovie from './component/addMovie/addMovie';
import { Provider } from "react-redux";
//import {store} from "./store";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';

const store = createStore(allReducers,applyMiddleware(thunkMiddleware));
function App() {
  return (
   
    <Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      <Route path="/" exact component={Home}></Route>
      <Route path="/details/:id" component={MovieDetails}></Route>
      <Route path="/addMovie" component={AddMovie}></Route>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
