import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
// import SignIn from "./routes/sign-in/sign-in.comopnent";
// const Shop = function () {
//   return (
//     <div>
//       <div>
//         <h1>shop</h1>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
