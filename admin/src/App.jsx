import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import { Route , Routes } from "react-router-dom";

  
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
