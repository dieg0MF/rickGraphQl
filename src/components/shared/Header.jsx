import React, { useContext,useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AppContext } from "../../AppProvider";
import "./Header.css";

import home from "../../assets/images/homeIcon.jpg";
import user from "../../assets/images/user.jpeg";
import { EpisodeGraph } from "../../helpers/graphQl";

const Header = () => {
  const { episode,setEpisode } = useContext(AppContext);
   const { search, setSearch } = useContext(AppContext);
   const[onChange,setOnchange] = useState('')

  const history = useHistory();

  const haddleChange = (e) => {
   
    setOnchange(e.currentTarget.value)
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch(onChange);
    setOnchange('')

  history.push("/search")
   


  
    // setEpisode(EpisodeGraph(search));
    // if( episode !== null ){ history.push("/search");}
  };

  return (

    <div className="container">
        
      <div className="containerHeader">
        <Link to="/">
          <img src={home} alt="home" />
        </Link>
        <h1>Rick and Morty</h1>
        <Link to="/account">
          <img src={user} alt="home" />
        </Link>
      </div>

      <form onSubmit={haddleSubmit}>
        <input
          type="text"
          value={onChange}
          onChange={haddleChange}
          placeholder="Search"
        />
      </form>
    </div>
  );
};
export default Header;
