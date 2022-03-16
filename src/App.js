import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = function () {
  return (
    <div>
      <div>
        <h1>shop</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />

        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
