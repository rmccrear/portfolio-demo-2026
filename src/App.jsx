import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import QuizCard from "./QuizCard"
import Fortune from "./Fortune"

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <QuizCard/>
      <Footer />
    </div>
  )
}

export default App
