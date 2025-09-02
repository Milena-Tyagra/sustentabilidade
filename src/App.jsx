import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Layout } from "./components/layout/Layout";
import { Home } from "./screens/home/Home";
import { Art } from "./screens/art/Art";

import { ContextProvider } from "./context/ContextProvider";
import { Recepies } from "./screens/recepies/Recepies";
import { AboutUs } from "./screens/aboutUs/AboutUs";
import { Summary } from "./screens/summary/Summary";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter  basename="/sustentabilidade">
        <Layout>
          <Routes>
            <Route
              index
              element={
                <Home />
              }
            />
            <Route path="art" element={<Art />} />
            <Route path="recepy" element={<Recepies />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="summary" element={<Summary />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
