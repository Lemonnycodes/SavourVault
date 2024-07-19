import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { AddRecipe } from "./pages/add-recipe";

import { SavedRecipes } from "./pages/saved-recipes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/Add-Recipe" element={<AddRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;