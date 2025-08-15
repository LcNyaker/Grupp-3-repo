import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import CatOfTheWeek from './components/CatOfTheWeek/CatOfTheWeek'
import Footer from './components/Footer/Footer'
import FunFacts from './components/FunFacts/FunFacts'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Races from './components/Races/Races'

function App() {

  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Races />
        <Gallery />
        <CatOfTheWeek />
        <FunFacts />
      </main>
      <Footer />
    </>
  )
}

export default App
