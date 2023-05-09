import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Authentication from "./components/auth/authentication.component";
import Products from "./components/products/products.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
