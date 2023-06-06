import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Services from "./pages/Services";
import CompletedTasks from "./pages/CompletedTasks";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Footer />
          </div>
        }
      />
      <Route path="/main" element={<Main />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/completedTasks" element={<CompletedTasks />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
