// import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
