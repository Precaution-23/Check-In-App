import "./assets/css/custom.css"
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Homepage from './Views/Homepage';
import Blog from './Views/Blog';
import BlogDetails from "./Views/BlogDetails";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header pages={<Homepage /> }  />}  />
          <Route path="/dashboard" element={<Header pages={<Dashboard /> }  />}  />
          <Route path="/blog" element={<Header pages={<Blog />} />} />
          <Route path="/blog-details" element={<Header pages={<BlogDetails />} />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
