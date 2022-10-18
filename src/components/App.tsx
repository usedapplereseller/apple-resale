import React from "react";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

export default App;
