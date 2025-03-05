import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftProvider } from "./context/GiftContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import Form from "./pages/Form";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {" "}
      {}
      <GiftProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GiftProvider>
    </Router>
  );
}

export default App;
