import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Parallax from './Components/Parallax/Parallax'
import About from './Components/About/About'
import './app.scss'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/Cursor'
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><Parallax type="about"/></section>
      <section><About /></section>
      <section id="Skills"><Parallax type="skills"/></section>
      <section><Skills /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
    </div>
  )
}

export default App