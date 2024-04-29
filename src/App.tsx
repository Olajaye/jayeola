import Navbar from "@/Components/Navbar"
import Header from "@/Components/Header"
import Skills from "@/Components/Skills"
import About from "@/Components/About"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"

function App() {
 

  return (
    <section className="bg-dark">
      <Navbar />
      <Header />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
   </section>
  )
}

export default App
