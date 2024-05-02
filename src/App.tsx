import Navbar from "@/Components/Navbar"
import Header from "@/Components/Header"
import Skills from "@/Components/Skills"
import About from "@/Components/About"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"
import Alert from "@/Components/Alert"
import { useEffect, useState } from "react"



function App() {
  const [alert, setAlertOpne] = useState(false)
  const [alertText, setAlertText] = useState("")
  const [alertColor, setAlertColor] = useState(false)

  
 
  const alertHandler = (open:boolean,message:string,color:boolean) => {
    setAlertOpne(open)
    setAlertText(message)
    setAlertColor(color)
    setTimeout(() => {
      console.log("back")
      setAlertOpne(false)
    }, 3000)
  }

    

  
 
  
  return (
    <section className="bg-dark mainapp w-[100%]" >
      <Navbar />
      <Header />
      <About/>
      <Skills />
      <Projects />
      <Contact alertHandler={alertHandler} />
      <Footer />
      {alert && <Alert alertText={alertText} alertColor={alertColor} />}
   </section>
  )
}

export default App
