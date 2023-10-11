import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
