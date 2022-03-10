import "./assets/css/custom.css"
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Homepage from './Views/Homepage';
import AuthHeader from './Components/AuthHeader';
import SignUp from './Views/SignUp';
import SignIn from './Views/SignIn';
import Blog from './Views/Blog';
import BlogDetails from "./Views/BlogDetails";
import NewLogin from "./Components/NewLogin";
import NewSignUp from "./Components/NewSignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header pages={<Homepage /> }  />}  />
          <Route path="/auth/signin" element={<Header pages={<NewLogin /> }  />}  />
          <Route path="/auth/signup" element={<Header pages={<NewSignUp /> }  />}  />
          <Route path="/blog" element={<Header pages={<Blog />} />} />
          <Route path="/blog-details" element={<Header pages={<BlogDetails />} />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
