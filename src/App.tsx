import "./App.css";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import ShowItems from "./components/DashboardComponents/ShowItems";
import Show from "./components/DashboardComponents/Show";
import AddItem from "./components/DashboardComponents/AddItem";
import EditItem from "./components/DashboardComponents/EditItem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Dashboard}>
          <Route path="" Component={ShowItems} />
          <Route path="/show/:itemId" Component={Show} />
          <Route path="/edit/:itemId" Component={EditItem} />
          <Route path="/addItem" Component={AddItem} />
        </Route>
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </div>
  );
}

export default App;
