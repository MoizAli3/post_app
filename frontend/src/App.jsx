import "./App.css";
import Layout from "./Layout";
import { Routes, Route   } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
