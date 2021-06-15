import React,{useState,useEffect} from 'react';
import "./header.css";
import { FiSearch, FiMenu } from 'react-icons/fi'
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import { getMovies } from '../../action';
import { connect } from "react-redux";

const HeaderDiv = styled.div`
text-align: center;
color:white;
background-color: #312f2fc9;
`;

function Header(props) {
  const [userSearchInput,setUserSearchInput] = useState("");

  function movieInputHandler(event){
   
    let userInput = event.target.value;
    setUserSearchInput(userInput);
    
  }

  function onClickMenu(event)  {
    props.history.push("/");
  }

  function onClickMovie(event) {
    props.history.push("/addMovie");
  }

  function onSearchMovie(){
    const {getMovies} = props;
    getMovies(userSearchInput);
  };
  
  return (
    <HeaderDiv>
    <div className="topNav">
      <div className="menu"><span onClick={onClickMenu}><FiMenu></FiMenu></span><span>Menu</span></div>
      <div className="SearchBar">
        <input onChange={movieInputHandler} id="movieInput" type="text" placeholder="Search Movie Title" />
        <span style={{cursor: "pointer"}} onClick={onSearchMovie}><FiSearch></FiSearch></span>
      </div>
      <button>Watchlist</button>
      <button onClick={onClickMovie}>Add Movie</button>
    </div>
    </HeaderDiv>
  );
}

const mapStateToProps = ({search}) =>{
  return {
    search : search
  }
}

const mapDispatchToProps = {
  getMovies:getMovies
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
