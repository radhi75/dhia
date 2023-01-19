import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlertErrors from "./Components/AlertErrors";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ClientRoute from "./PrivateRoutes/ClientRoute";
import AddPlant from "./Components/AddPlant";
import PlanList from "./Components/PlantList";
function App() {
  return (
    <div className="App">
      <Navigation />
      <AlertErrors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddPlant />} />
        <Route path="/product" element={<PlanList />} />
        <Route
          path="/profile"
          element={
            <ClientRoute>
              <Profile />
            </ClientRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
