import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignIn from "./routes/sign-in/sign-in.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="home" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
