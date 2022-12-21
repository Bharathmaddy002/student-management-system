import { Route, Routes } from "react-router-dom";
import StuList from "./components/StuList";
import AddList from "./components/AddList";
import EditList from "./components/EditList";
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route exact path="/" element={<StuList />}></Route>
              <Route path="/add" element={<AddList />}></Route>
              <Route path="/edit/:id" element={<EditList />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
