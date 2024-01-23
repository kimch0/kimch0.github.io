import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import EmailForm from './components/EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <EmailForm />
      <Footer />
    </>
  )
}

export default App
