import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slideshow from "./components/slideshow";
import  TextComponent from "./components/homeText"
import  CoursesSection from "./components/registeras"
import LoginPage from "./components/login"
import "./App.css";


function App() {
  return <div>
    <Navbar/>
    <LoginPage/>
    <Slideshow/>
    <TextComponent/>
    <CoursesSection/>
    <Footer/>
    
  </div>
}

export default App;
