import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftProvider } from "./context/GiftContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import Form from "./pages/Form";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import CreateUser from "./pages/CreateUser";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <GiftProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/form" element={<Form />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </GiftProvider>
    </Router>
  );
}

export default App;
