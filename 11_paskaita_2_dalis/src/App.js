import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="appContent">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
