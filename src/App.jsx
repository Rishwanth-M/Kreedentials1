// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />
    </Routes>
  );
}
