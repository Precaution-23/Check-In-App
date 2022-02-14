import './App.css';
import "./assets/css/custom.css"
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Homepage from './Views/Homepage';
import AuthHeader from './Components/AuthHeader';
import SignUp from './Views/SignUp';
import SignIn from './Views/SignIn';
import Blog from './Views/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header pages={<Homepage /> }  />}  />
          <Route path="/signup" element={<AuthHeader authpages={<SignUp />} />} />
          <Route path="/signin" element={<AuthHeader authpages={<SignIn />} />} />
          <Route path="/blog" element={<Header pages={<Blog />} />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
