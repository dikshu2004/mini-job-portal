import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;