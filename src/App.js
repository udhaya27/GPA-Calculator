import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import { UserContext, UserProvider } from "./usercontext";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <UserProvider>
      <Router>
      <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element= {<Home />}/>
      </Routes>
      </div>
      </div>
    </Router>
    </UserProvider>


  );
}

export default App;
