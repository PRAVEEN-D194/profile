import logo from './logo.svg';
import './App.css';
import Skills from './component/skills';
import Navibar from './component/navibar';
import About from './component/about';
import Project from './component/project';
import Certificate from './component/certificate'
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Certificate></Certificate>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
