import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">SavourVault</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};
