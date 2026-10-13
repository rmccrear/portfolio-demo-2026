import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import QuizCard from "./QuizCard"
import Fortune from "./Fortune"

import RobertsButton from "./RobertsButton"
import MoonButton from "./MoonButton"
import GandalfsButton from "./GandalfsButton"
import SuperTrooperButton from "./SuperTrooperButton"
import AlanasButton from './AlanasButton'
import SuperCoderButton from  "./SuperCoderButton"
import NikasButton from "./NikasButton"
import KimberlysButton from "./KimberlysButton"

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <p>Pokémon trainer from Pallet Town.</p>
      <div>
        <p>Custom Buttons</p>
        <RobertsButton course="May 2026 Level 3" /> { " " }
        <GandalfsButton course="May 2026 Level 3-Middle Earth/Valinor" /> {" "} 
        <MoonButton course="May 2026 Level 3"/> {" "}
        <AlanasButton course="May 2026 lvl 3" /> &nbsp;
        <SuperTrooperButton course="May 2026 Level 3" /> { " " } 
        <SuperCoderButton course= "May 2026 Level 3"/> &nbsp;
        <NikasButton course="May 2026 Level 3"/> { " " }
        <KimberlysButton course="May 2026 level 3" />

      </div>
      <Fortune />
      <QuizCard/>
      <Footer />
    </div>
  )
}

export default App
