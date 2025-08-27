import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Layout } from "./components/layout/Layout";
import { Home } from "./screens/home/Home";
import { Art } from "./screens/art/Art";
// import { Recepies } from "./screens/recepies/Recepies";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              index
              element={
                <Home />
              }
            />
            <Route path="art" element={<Art />} />
            {/* <Route path="recepies" element={<Recepies />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
