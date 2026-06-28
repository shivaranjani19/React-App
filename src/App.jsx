import './App.css'
import Navbar from './Navbar';
import Course from './Course';
import Footer from './Footer';
import coding from "./assets/coding.png";

function App() {
  return (
    <>
    <Course name="HTML" price="$10" image={coding}/>
    <Course name="CSS" price="$15" image={coding}/>
    <Course name="JavaScript" price="$20" image={coding}/>
    </>
  );
}

export default App