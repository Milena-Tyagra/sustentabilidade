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
import { Interviews } from "./screens/enterviews/Interviews";
import { Videos } from "./screens/videos/Videos";
import { Gallery } from "./screens/gallery/Gallery";

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
            <Route path="interviews" element={<Interviews />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="videos" element={<Videos />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
